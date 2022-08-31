import { useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/description/Player";
import VideoDescription from "../components/description/VideoDescription";
import RelatedVideoList from "../components/list/RelatedVideoList";
import { useDispatch, useSelector } from "react-redux";
import { getVideo } from "../redux/features/video/videoSlice";
import Loading from "../components/utils/Loading";

export default function Video() {
  const params = useParams();
  const { videoId } = params;
  const { video, isLoading, isError, error } = useSelector(
    (state) => state.video
  );

  const { title, id, link } = video;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideo(videoId));
  }, [dispatch, videoId]);

  let content = null;

  if (isLoading) {
    content = <Loading />;
  }

  if (!isLoading && isError) {
    content = content = <div className="col-span-12">{error}</div>;
  }

  if (!isLoading && !isError && !video?.id) {
    content = content = <div className="col-span-12">Not found</div>;
  }
  if (!isLoading && !isError && video?.id) {
    content = (
      <div class="grid grid-cols-3 gap-2 lg:gap-8">
        <div class="col-span-full w-full space-y-8 lg:col-span-2">
          <VideoPlayer link={link} title={title} />

          <VideoDescription video={video} />
        </div>

        <RelatedVideoList />
      </div>
    );
  }

  return (
    <section class="pt-6 pb-20">
      <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">{content}</div>
    </section>
  );
}
