import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../../redux/features/videos/videosSlice";
import Loading from "../utils/Loading";
import VideoGridItem from "./VideoGridItem";
import { getTags } from "../../redux/features/tags/tagsSlice";

export default function VideGrid() {
  const dispatch = useDispatch();

  const { isLoading, isError, videos, error } = useSelector(
    (item) => item.vidoes
  );
  const { search, tags } = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(getVideos({ tags, search }));
  }, [dispatch, tags, search]);

  let content;

  if (isLoading) {
    content = <Loading />;
  }

  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }

  if (!isLoading && !isError && videos?.length === 0) {
    content = <div className="col-span-12">No video found</div>;
  }

  if (!isLoading && !isError && videos?.length > 0) {
    content = videos.map((video) => (
      <VideoGridItem key={video.id} video={video} />
    ));
  }

  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {content}
        </div>
      </section>
    </section>
  );
}
