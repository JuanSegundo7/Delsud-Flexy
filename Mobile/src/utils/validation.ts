import * as Yup from "yup";

const ValidationSchema = Yup.object().shape({
  image: Yup.string().required("La foto es requerida"),
  name: Yup.string()
    .required("El nombre y apellido son requeridos")
    .matches(/^\S+(\s\S+)+$/, "Debe ingresar al menos dos palabras"),

  number: Yup.number().required("El número de teléfono es requerido"),
  email: Yup.string()
    .required("El email es requerido")
    .email("Ingrese un email válido"),

  password: Yup.string()
    .required("La contraseña es requerida")
    .matches(/[A-Z]/, "La contraseña debe tener al menos mayúscula")
    .matches(/[a-z]/, "La contraseña debe tener al menos una letra")
    .matches(/[0-9]/, "La contraseña debe tener al menos un número")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "La contraseña debe tener al menos un caracter especial"
    )
    .min(8, "La contraseña debe tener al menos 8 caracteres"),
});

export default ValidationSchema;
