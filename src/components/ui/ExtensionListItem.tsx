import dots from "../../assets/images/bg-dots.svg";
import Button from "./Button";
interface ExtensionListItemProps {
  data: {
    name: string;
    minVer: string;
    logo: string;
  };
  index: number
}

const ExtensionListItem = ({ data, index }: ExtensionListItemProps) => {
  return (
    <div className="shadow-xl rounded-md w-full flex flex-col justify-center lg:max-w-[270px]" style={{ marginTop: `${index * 60}px` }}>
      <img
        src={data.logo}
        alt={`icon for ${data.name}`}
        className="w-14 mt-4 mx-auto lg:w-20"
      />
      <h3 className="text-xl text-center mt-4 font-semibold text-very-dark-blue lg:mt-8 lg:mb-4">Add to {data.name}</h3>
      <p className="text-center text-grayish-blue lg:mb-8">{data.minVer}</p>
      <img src={dots} alt="dots separator" className="w-[calc(100%+4rem)] my-6" />
      <div className="px-6">
        <Button variant="primary" className="mb-6">Add & Install Extension</Button>
      </div>
    </div>
  );
};

export default ExtensionListItem;
