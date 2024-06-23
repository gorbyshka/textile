import React, {
    useCallback,
    useReducer
} from "react";

import {
    Modal,
    Form,
    Input,
    ButtonGroup,
    Button
} from "../assets/styles/pagesStyle";

import { OrderFormProps } from "../types/pagesType/orderProps";
import { formReducer } from "../utils/formReducer/formReducer";
import { initialFormData } from "../constants/pageConst/initialFormData";

export const OrderForm: React.FC<OrderFormProps> = React.memo(({ onClose, isOrdering }) => {

    const [formData, dispatch] = useReducer(formReducer, initialFormData);

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = event.target;
        dispatch({ type: "CHANGE", name, value });

    }, []);

    const handleFormSubmit = useCallback(async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log("Данные заказа:", formData);
    
        try {
          // Отправьте данные формы на сервер
          const response = await fetch("http://localhost:5000/api/submitOrder", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            console.log("Заказ успешно отправлен.");
            onClose();
          } else {
            console.error("Не удалось отправить заказ.");
          }
        } catch (error) {
          console.error("Ошибка при отправке заказа:", error);
          
        }
      }, [formData, onClose]);

    return (

        <Modal>

            {isOrdering && (

                <Form onSubmit={handleFormSubmit}>

                    <Input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <Input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />

                    <ButtonGroup>

                        <Button type="submit">

                            Отправить

                        </Button>

                        <Button type="button" onClick={onClose}>

                            Отменить

                        </Button>

                    </ButtonGroup>

                </Form>

            )}

        </Modal>

    );

});
