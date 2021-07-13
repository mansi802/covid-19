import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";

export default function InfoBox({ title, cases, total }) {
  return (
    <Card className="infoBox">
      <CardContent>
        {/* Title */}
        <Typography color="testSecondary" className="infoBox__title">
          {title}
        </Typography>
        {/* Number of cases */}
        <h2 className="infoBox__cases">{cases}</h2>
        {/* 1.2 million total */}
        <Typography color="textSecondary" className="infoBox__total">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}
