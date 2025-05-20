import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../../../apis/auth.api";
import { AuthContext } from "../../../context/AuthContext";

export default function ChangePassword() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const schema = yup.object({
    currentPassword: yup.string().required("Mot de passe actuel requis"),
    newPassword: yup
      .string()
      .min(5, "Trop court")
      .max(20, "Trop long")
      .required("Nouveau mot de passe requis"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("newPassword"), null], "Les mots ne correspondent pas")
      .required("Confirmer le nouveau mot de passe"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  const onSubmit = async (data) => {
    console.log(data);

    const response = await changePassword({
      ...data,
      userId: user._id,
    });
    if (response.messageOk) {
      toast.success(response.messageOk);
      reset();
      navigate("/");
    } else {
      toast.error(response.message);
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white shadow-xl rounded">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 mb-6 mx-auto min-w-[300px]"
        >
          <div className="flex flex-col mb-2">
            <label className="mb-2">Mot de passe actuel</label>
            <input
              {...register("currentPassword")}
              type="password"
              id="currentPassword"
              className="border border-gray-300 rounded px-3 py-2 focus: outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.currentPassword && (
              <p className="text-red-500">{errors.currentPassword.message}</p>
            )}
          </div>
          <div className="flex flex-col mb-2">
            <label className="mb-2">Nouveau mot de passe</label>
            <input
              {...register("newPassword")}
              type="password"
              id="newPassword"
              className="border border-gray-300 rounded px-3 py-2 focus: outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.newPassword && (
              <p className="text-red-500">{errors.newPassword.message}</p>
            )}
          </div>
          <div className="flex flex-col mb-2">
            <label className="mb-2">Confirmation</label>
            <input
              {...register("confirmPassword")}
              type="password"
              id="confirmPassword"
              className="border border-gray-300 rounded px-3 py-2 focus: outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>
          <button type="submit" className="bg-blue-500 text-white rounded py-2">
            Modifier le mot de passe
          </button>
        </form>
      </div>
    </div>
  );
}
