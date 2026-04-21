import { useForm, useFieldArray } from "react-hook-form";

const TodoAppRHF = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      task: "test",
      year: "",
      locations: [{ name: "" }],
      address:{
        city:"",
        state:"",
        country:""
      }
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "locations",
  });

  const onSubmit = (data) => {
    console.log("Form submitted with data:", data);
    console.log(`hai ${data.task} in year ${data.year}`);
  };

  return (
    <div>
      <h3>Todo App</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("task", { required: true, minLength: 5 })}
          placeholder="Enter task name"
        />
        {errors.task && (
          <span>
            This field is required and must be at least 5 characters long
          </span>
        )}
        <input
          {...register("year", {
            required: true,
            minLength: 4,
            validate: (value) => !isNaN(value) && parseInt(value) > 2020,
          })}
          placeholder="Enter year"
        />
        {errors.year && (
          <span>
            This field is required and must be a valid year after 2020
          </span>
        )}
        <h4>Locations</h4>
        {fields.map((field, index) => (
          <div key={field.id}>
            <input
              {...register(`locations.${index}.name`, { required: true })}
              placeholder="Enter location name"
            />
            <button type="button" onClick={() => remove(index)}>
              Remove
            </button>
            {errors.locations?.[index]?.name && (
              <span>This field is required</span>
            )}
          </div>
        ))}
        <button type="button" onClick={() => append({ name: "" })}>
          Add Location
        </button>

        <h4>Address</h4>
        <input
          {...register("address.city", { required: true })}
          placeholder="Enter city"
        />
        {errors.address?.city && <span>City is required</span>}
        <input
          {...register("address.state", { required: true })}
          placeholder="Enter state"
        />
        {errors.address?.state && <span>State is required</span>}
        <input
          {...register("address.country", { required: true })}
          placeholder="Enter country"
        />
        {errors.address?.country && <span>Country is required</span>}

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TodoAppRHF;
