export const commonStyles = {
  buttonBase: {
    width: 327,
    height: 48,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 0,
    borderColor: "transparent",
    transition: "0.3s all",
  },
};

export const globalStyles = {
  error: {
    fontSize: 14,
    color: "#D0342C",
    position: "absolute" as "absolute",
    top: 48,
  },
  error_border: {
    borderWidth: 1,
    borderColor: "#D0342C",
  },

  sucess_border: {
    borderWidth: 1,
    borderColor: "#09c372",
  },

  buttonBase: {
    width: 327,
    height: 48,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 0,
    borderColor: "transparent",
    transition: "0.3s all",
  },

  button: {
    ...commonStyles.buttonBase,
    backgroundColor: "#7065F0",
  },

  button_error: {
    ...commonStyles.buttonBase,
    backgroundColor: "#D0342C",
  },

  button_success: {
    ...commonStyles.buttonBase,
    backgroundColor: "#09c372",
  },

  input: {
    width: 327,
    height: 48,
    fontSize: 16,
    paddingHorizontal: 16,
    lineHeight: 24,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: "#F7F7FD",
    borderWidth: 1,
    borderColor: "#E0DEF7",
    color: "#7C8093",
  },
};
