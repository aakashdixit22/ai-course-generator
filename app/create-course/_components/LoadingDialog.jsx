// 
import React from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Image from 'next/image';

function LoadingDialog({ loading }) {
  return (
    <AlertDialog open={loading}>
      <AlertDialogContent>
        <AlertDialogHeader>
          {/* Add a title for accessibility */}
          {/* <AlertDialogTitle>Loading</AlertDialogTitle> */}
          <AlertDialogDescription>
            <div className="flex flex-col items-center py-10">
              <Image src={'/rocket.gif'}  width={100} height={100} alt="Loading animation" />
              <h2>Please Wait... Generating Your Course.</h2>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default LoadingDialog;
