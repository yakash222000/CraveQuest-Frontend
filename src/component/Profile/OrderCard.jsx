import { Button, Card } from "@mui/material";
import React from "react";

const OrderCard = () => {
  return (
    <Card className="flex justify-between items-center p-5 ">
      <div className="flex items-center space-x-5">
        <img
          className="h-16 w-16"
          src="https://cdn.pixabay.com/photo/2024/04/18/10/41/ai-generated-8704060_1280.jpg"
          alt=""
        />
        <div>
          <p>Pizza</p>
          <p>₹499</p>
        </div>
      </div>
      <div>
        <Button desabled  className="cursor-not-allowed">Completed</Button>
      </div>
    </Card>
  );
};

export default OrderCard;
