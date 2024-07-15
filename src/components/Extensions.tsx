import googleIcon from '../assets/images/logo-chrome.svg'
import firefoxIcon from '../assets/images/logo-firefox.svg'
import operaIcon from '../assets/images/logo-opera.svg'
import ExtensionListItem from './ui/ExtensionListItem'


const Extensions = () => {
    const extensionsData = [
        {
            logo: googleIcon,
            name: 'Chrome',
            minVer: 'Minimum version 62',
        },
        {
            logo: firefoxIcon,
            name: 'Firefox',
            minVer: 'Minimum version 55',
        },
        {
            logo: operaIcon,
            name: 'Opera',
            minVer: 'Minimum version 46',
        },
    ]
  return (
    <section className='lg:mt-32'>
        <h2 className="text-3xl text-center mb-4">Download the extension</h2>
        <p className="text-center mb-5 text-grayish-blue lg:w-1/2 lg:mx-auto">
            We’ve got more browsers in the pipeline. Please do let us know if you’ve
            got a favourite you’d like us to prioritize.
        </p>
        <div className="flex flex-col justify-center items-center gap-10 lg:flex-row lg:mt-12">
           {extensionsData.map((data, index) => (
                <ExtensionListItem key={data.name} data={data} index={index} />
            )
           )}
        </div>
    </section>
  )
}

export default Extensions
