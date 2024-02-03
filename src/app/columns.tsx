"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Video = {
  VideoID: string;
  Title: string;
  Description: string;
  PublishDate: Date;
  ThumbnailURL: string;
};

export const columns: ColumnDef<Video>[] = [
  {
    header: "Thumbnail",
    accessorKey: "ThumbnailURL",
    cell: ({ row }) => {
      const imgUrl = row.getValue("ThumbnailURL") as string;
      return (
        <div>
          <img src={imgUrl}></img>
        </div>
      );
    },
  },
  {
    header: "Video ID",
    accessorKey: "VideoID",
  },
  {
    header: "Title",
    accessorKey: "Title",
  },
  {
    header: "Description",
    accessorKey: "Description",
  },
  {
    header: "Publish Date",
    accessorKey: "PublishDate",
    cell: ({ row }) => {
      const date = new Date(row.getValue("PublishDate"));
      return <div>{date.toLocaleDateString()}</div>;
    },
  },
];
