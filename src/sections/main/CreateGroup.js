import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Stack,
} from "@mui/material";
import * as Yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFTextField from "../../components/hook-form/RHFTextField";
import RHFAutoComplete from "../../components/hook-form/RHFAutoComplete";

const MEMBERS = ["Name 1", "Name 2", "Name 3"]
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const CreateGroupForm = ({open, handleClose}) => {
  const NewGroupSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string(),
    memebers: Yup.array().min(2, "At least two member should be selected"),
  });
  const defaultValues = {
    title: "",
    description:"",
    members: [],
  };
  const methods = useForm({
    resolver: yupResolver(NewGroupSchema),
    defaultValues,
  });
  const {
    reset,
    watch,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful, isValid },
  } = methods;
  const onSubmit = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <FormProvider {...methods} onSubmit ={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField name={"title"} label="Title" />
        <RHFTextField  name={"description"} label="Description"  inputProps={{ style: { height: "80px" } }}  />
        <RHFAutoComplete name={'members'} label={'Memebers'} multiple freeSolo options={MEMBERS.map((option) =>option)} ChipProps={{size:'medium'}} />
        <Stack spacing={2} direction={"row"} alignItems={'center'} justifyContent={'end'}>
          <Button onClick={handleClose}>Cance</Button>
      <Button type="submit" variant="contained">
        Create
      </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
  
};

const CreateGroup = ({ open, handleClose }) => {
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      sx={{ p: 4 }}
    >
      {/* Title */}
      <DialogTitle sx={{mb:3}}>Create New Group</DialogTitle>
      {/* Content */}
      <DialogContent>
        {/* Form */}
        <CreateGroupForm handleClose={handleClose} />
        </DialogContent>
    </Dialog>
  );
};

export default CreateGroup;
