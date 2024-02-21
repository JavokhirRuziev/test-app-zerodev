import { Box, TextField, Typography, Select, MenuItem } from "@mui/material";

export default ({
  placeholder,
  type,
  label,
  field,
  form: { touched, errors, setFieldValue },
  options,
}) => {
  return (
    <Box position="relative">
      <Typography variant="h6" mb={1}>
        {label}
      </Typography>
      {type === "select" ? (
        <Select
          fullWidth
          color="secondary"
          value={field.value ? field.value.value : ""}
          onChange={(event) => {
            const selectedOption = options.find(
              (option) => option.value === event.target.value
            );
            setFieldValue(field.name, selectedOption);
          }}
          sx={{ mb: 2 }}
        >
          {options?.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      ) : (
        <TextField
          fullWidth
          color="secondary"
          placeholder={placeholder}
          type={type}
          value={field.value}
          onChange={(event) => setFieldValue(field.name, event.target.value)}
          sx={{ mb: 2 }}
        />
      )}
      {touched[field.name] && errors[field.name] && (
        <Typography
          component="div"
          style={{
            position: "absolute",
            bottom: -5,
            color: "#d63333",
            transition: "0.3s",
          }}
        >
          {errors[field.name]}
        </Typography>
      )}
    </Box>
  );
};
