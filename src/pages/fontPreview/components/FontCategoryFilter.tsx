import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";
import { FONT_CATEGORIES } from "../../../constants/fonts";
import type { FontCategoryFilterProps, FontFilterValue } from "../types";

const FontCategoryFilter = ({ value, onChange }: FontCategoryFilterProps) => {
  const handleChange = (event: SelectChangeEvent<FontFilterValue>) => {
    onChange(event.target.value as FontFilterValue);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="font-category-filter-label">Categoría</InputLabel>
      <Select
        labelId="font-category-filter-label"
        id="font-category-filter"
        label="Categoría"
        value={value}
        onChange={handleChange}
        sx={{
          borderRadius: "16px",
          fontFamily: "Montserrat, sans-serif",
          bgcolor: "#fff",
        }}
      >
        <MenuItem value="Todas">Todas</MenuItem>
        {FONT_CATEGORIES.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FontCategoryFilter;
