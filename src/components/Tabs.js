import React from 'react';

export interface Tab {
    title: string;
}
interface Props {
	tabs: Tab[];
	selectedIndex: number;
	onChangeSelectedIndex: (Index: number) => void;
}

export default function Tabs({tabs, selectedIndex, onChangeSelectedIndex} : Props) {
	const tabButtons = tabs.map((tab, index) => {
    return (
      <button
        className="px-4"
        aria-selected={index === selectedIndex}
        key={index}
        role={"tab"}
        onClick={() => {
          onChangeSelectedIndex(index);
        }}
      >
        {tab.title}
      </button>
    );
  });

  return (
    <div>
      <div>{tabButtons}</div>
      <hr />
      
      <div>{tabs[selectedIndex].content}</div>
    </div>
  );
}