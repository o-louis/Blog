import { useState } from 'react';

interface Props {
  availableTags: string[];
  setFilterTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const CloseIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z"
    ></path>
  </svg>
);

const SearchByTags = ({ availableTags, setFilterTags }: Props) => {
  const [selectedTags, setSelectedTags] = useState([]);

  const isTagSelected = (tag): boolean =>
    !!selectedTags.find((selectedTag) => selectedTag == tag);

  const handleSelect = (tag) => {
    let updatedSelectedTags = [];
    if (isTagSelected(tag)) {
      updatedSelectedTags = selectedTags.filter((x) => x !== tag);
    } else {
      updatedSelectedTags = [...selectedTags, tag];
    }
    setSelectedTags(updatedSelectedTags);
    setFilterTags(updatedSelectedTags);
  };

  return (
    <ul className="flex gap-x-4 mt-4">
      {availableTags.map((availableTag, idx) => (
        <li
          key={`${availableTag}${idx}`}
          onClick={() => handleSelect(availableTag)}
          className={`px-2 py-1 border rounded-sm flex justify-between items-center cursor-pointer ${
            isTagSelected(availableTag) ? 'bg-[#3b394c] text-white' : ''
          }`}
        >
          <span className="mr-4">{availableTag}</span>
          <CloseIcon />
        </li>
      ))}
    </ul>
  );
};

export default SearchByTags;
