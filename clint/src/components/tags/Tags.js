import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTags } from "../../redux/features/tags/tagsSlice";
import Tag from "./Tag";

export default function Tags() {
  const dispatch = useDispatch();

  const { tags, isLoading } = useSelector((item) => item.tags);
  useEffect(() => {
    dispatch(getTags());
  }, [dispatch]);

  return (
    <>
      {tags.length > 0 ? (
        <section>
          <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
            {tags.map((tag) => (
              <Tag title={tag.title} key={tag.id} />
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
