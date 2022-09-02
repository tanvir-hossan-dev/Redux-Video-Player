import { useDispatch, useSelector } from "react-redux";
import {
  tagRemoved,
  tagSelected,
} from "../../redux/features/filters/filtersSlice";

export default function Tag({ title }) {
  const dispatch = useDispatch();

  const { tags } = useSelector((state) => state.filters);

  const selectedTag = tags.includes(title) ? true : false;

  const handleSelected = () => {
    if (selectedTag) {
      dispatch(tagRemoved(title));
    } else {
      dispatch(tagSelected(title));
    }
  };

  return (
    <div
      onClick={handleSelected}
      className={
        selectedTag
          ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
          : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer"
      }
    >
      {title}
    </div>
  );
}
