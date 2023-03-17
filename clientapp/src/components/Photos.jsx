import React, {Component} from 'react';


class Photos extends React.Component {
  componentDidMount() {
    const headerTitle = 'Photos';
    this.props.setHeaderTitle(headerTitle);
    document.title = headerTitle;
  }
  render() {
    return (
            <>
        <h3 className="text-[32px] text-nba-darkgray text-center font-sans mt-[20px]">
          When you like a photo, you can right-click a photo and choose the download menu item in the context menu to download.
        </h3>
        <div className="w-[1438px] h-[700px] border-nba-border border-2 mt-[58px] mt-[58px] pl-[30px] pr-[30px] grid items-center justify-between">
          <div className="flex w-[25%]" >
            <img src="/images/photo_sample.jpg"/>
            <img src="/images/photo_sample.jpg"/>
            <img src="/images/photo_sample.jpg"/>
            <img src="/images/photo_sample.jpg"/>
          </div>
          <div className="flex w-[25%]">
            <img src="/images/photo_sample.jpg"/>
            <img src="/images/photo_sample.jpg"/>
            <img src="/images/photo_sample.jpg"/>
            <img src="/images/photo_sample.jpg"/>
          </div>
          <div className="flex w-[25%]">
            <img src="/images/photo_sample.jpg"/>
            <img src="/images/photo_sample.jpg"/>
            <img src="/images/photo_sample.jpg"/>
            <img src="/images/photo_sample.jpg"/>
          </div>

        </div>
        <div className="grid grid-cols-3 w-full items-center justify-between py-[133px] px-[166px] gap-x-[305px] gap-y-[199px]">
          <h3 className="text-[32px] text-nba-darkgray font-sans mt-[20px]">

          </h3>

        </div>
      </>
    );
  }
}

export default Photos;
