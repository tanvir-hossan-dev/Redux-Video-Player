import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReletedVideos } from "../../redux/features/reletedVideos/reletedVideosSlice";
import RelatedVideoListItem from "./RelatedVideoListItem";
import Loading from "../utils/Loading";

export default function RelatedVideoList({ currentVideoId, tags }) {
  const dispatch = useDispatch();

  const { reletedVideos, isLoading, isError, error } = useSelector(
    (state) => state.reletedVideos
  );

  useEffect(() => {
    dispatch(getReletedVideos({ id: currentVideoId, tags }));
  }, [dispatch, tags, currentVideoId]);

  let content = null;

  if (isLoading) {
    content = <Loading />;
  }

  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }

  if (!isLoading && !isError && !reletedVideos?.length === 0) {
    content = <div className="col-span-12">No video found</div>;
  }

  if (!isLoading && !isError && reletedVideos?.length > 0) {
    content = reletedVideos.map((video) => (
      <RelatedVideoListItem video={video} key={video.id} />
    ));
  }

  return (
    <div class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
}
