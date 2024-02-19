import { useState } from "react";
import { Link } from "react-router-dom";
import { Pix } from "@mui/icons-material";
import {
    Box,
    Typography,
    useTheme
} from "@mui/material";

const Navbar = () => {
    const { palette } = useTheme();
    const [selected, setSelected] = useState("dashboard");

    return (
        <Box
            color={palette.grey[300]}
            className="flex items-center justify-between"
        >
            {/* LEFT SIDE */}
            <section className="flex items-center gap-2">
                <Pix />
                <Typography>
                    Finanseer
                </Typography>
            </section>

            {/* RIGHT SIDE */}
            <section className="flex items-center gap-2">
                <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
                    <Link
                        to="/"
                        onClick={() => setSelected("dashboard")}
                        style={{
                            color: selected === "dashboard"
                                ? "inherit"
                                : palette.grey[700],
                            textDecoration: "inherit"
                        }}
                    >
                        dashboard
                    </Link>
                </Box>
                <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
                    <Link
                        to="/predictions"
                        onClick={() => setSelected("predictions")}
                        style={{
                            color: selected === "predictions"
                                ? "inherit"
                                : palette.grey[700],
                            textDecoration: "inherit"
                        }}
                    >
                        predictions
                    </Link>
                </Box>
            </section>

        </Box>
    )
}

export default Navbar