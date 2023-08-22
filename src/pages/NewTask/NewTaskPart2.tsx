import { useEffect, useState } from "react";
import { BotProps } from "../../utils/interfaces";
import { motion } from "framer-motion";
import { CircularProgress } from "@mui/material";

export const NewTaskPart2 = ({ name }: BotProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  let [files, setFiles] = useState<Array<File | null>>([]);

  const deleteFile = (file: File) => {
    let index = files.indexOf(file);
    let copiaArray = [...files];

    if (index !== -1) {
      copiaArray.splice(index, 1);
    }
    setFiles(copiaArray);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
    if (file != null) {
      files.push(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
    if (file != null) {
      files.push(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="max-w-[95%] px-8 py-3  h-full  justify-center"
    >
      <div className="flex  flex-col justify-center">
        <span className="text-white text-4xl  font-semibold">UFC AutoBots</span>
        <span className="text-white mt-10 text-2xl font-semibold">
          <h1>
            Bot <span className="text-[#36bd42]">{name}</span>
          </h1>
          <h2 className="mt-3 mb-5 text-xl">Selecione as planilhas</h2>
        </span>
        <div className="file-uploader p-4 rounded-xl text-lg flex w-[90%] flex-col justify-center items-center text-white border-[#36bd42] border-2 border-dotted">
          <div
            className="mb-10 font-semibold"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            {selectedFile ? (
              <p>Arquivo selecionado: {selectedFile.name}</p>
            ) : (
              <p>Arraste e solte um arquivo ou selecione-o do computador</p>
            )}
          </div>
          <input type="file" accept=".csv" onChange={handleFileSelect} />
        </div>

        <div className="mt-10 w-[90%] text-white flex flex-col ">
          <table className=" w-full border-[#36bd42]  border-2  rounded-lg  border-separate">
            <thead className=" bg-[#2f60d1]">
              <tr className="text-left ">
                <th>Nome do Arquivo</th>
                <th>Tamanho (Bytes)</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody className="">
              {files.map((file) => (
                <tr>
                  <td>{file?.name}</td>
                  <td>{file?.size} </td>
                  <td>
                    <button
                      onClick={() => {
                        if (file) {
                          deleteFile(file);
                        }
                      }}
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            id="submitButton"
            type="button"
            className="flex justify-center !w-52 mt-10 items-center self-end"
          >
            {false ? (
              <CircularProgress size={30} color="inherit" />
            ) : (
              <div>Executar</div>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};
