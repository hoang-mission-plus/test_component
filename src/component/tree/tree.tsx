import React, { useState } from "react";
import { Tree, ITreeNode } from "@rt-commercial-engineering/rt-design-system";

const INITIAL_STATE: ITreeNode[] = [
  {
    id: 0,
    hasCaret: true,
    icon: "folder-close",
    label: "Folder 1",
  },
  {
    id: 1,
    hasCaret: true,
    icon: "folder-close",
    label: "Folder 2",
  },
  {
    id: 2,
    icon: "folder-close",
    isExpanded: true,
    label: "Folder 3",
    childNodes: [
      {
        id: 3,
        icon: "edit",
        label: "Item 1",
      },
      {
        id: 4,
        icon: "duplicate",
        label: "Item 2",
      },
      {
        id: 5,
        icon: "add",
        label: "Item 3",
      },
      {
        id: 6,
        hasCaret: true,
        icon: "folder-close",
        label: "Folder A",
        childNodes: [
          { id: 7, icon: "edit", label: "Item 1" },
          { id: 8, icon: "duplicate", label: "Item 2" },
          {
            id: 9,
            icon: "add",
            label: "Item 3",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    hasCaret: true,
    icon: "folder-close",
    label: "Folder 4",
    disabled: true,
  },
];

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return () => setValue((value) => ++value);
}

const TreeComponent = (args: any) => {
  const nodes = args.nodes || INITIAL_STATE;
  const forceUpdate = useForceUpdate();
  const forEachNode = (nodes: any, callback: (node: ITreeNode) => void) => {
    if (nodes == null) {
      return;
    }

    for (const node of nodes) {
      callback(node);
      forEachNode(node.childNodes, callback);
    }
  };
  const handleNodeClick = (
    nodeData: ITreeNode,
    _nodePath: number[],
    e: React.MouseEvent<HTMLElement>
  ) => {
    const originallySelected = nodeData.isSelected;
    if (!e.shiftKey) {
      forEachNode(nodes, (n) => (n.isSelected = false));
    }
    nodeData.isSelected =
      originallySelected == null ? true : !originallySelected;
    forceUpdate();
  };
  const handleNodeCollapse = (nodeData: ITreeNode) => {
    nodeData.isExpanded = false;
    forceUpdate();
  };
  const handleNodeExpand = (nodeData: ITreeNode) => {
    nodeData.isExpanded = true;
    forceUpdate();
  };
  const myStyle = {
    width: "169px",
  };
  return (
    <div style={myStyle}>
      <Tree
        contents={nodes}
        onNodeClick={handleNodeClick}
        onNodeCollapse={handleNodeCollapse}
        onNodeExpand={handleNodeExpand}
      />
    </div>
  );
};

export default TreeComponent;
