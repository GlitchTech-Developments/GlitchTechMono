/* eslint-disable @typescript-eslint/no-explicit-any */

const Section = (props: any) => {
  return (
    <div className="min-w-full ">
      <div className="w-95 card min-h-screen border-[3px] border-x-glitchtech_alt_dark border-y-glitchtech_alt_dark bg-translucent p-[1rem]">
        {props.children}
      </div>
    </div>
  );
};

export default Section;
