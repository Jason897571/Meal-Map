import { Modal, Label, TextInput, Button } from 'flowbite-react';
import { ADD_USER} from '../../utlis/mutations';
import { useMutation } from '@apollo/client'
import Auth from '../../utlis/auth';

const SignUpModal = ({ isOpen, formState, onChange, onClose, error }) => {

  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };



  return (
    <Modal show={isOpen} size="md" onClose={onClose} popup>
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign Up</h3>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username" value="Username" />
            </div>
            <TextInput
              id="username"
              placeholder="Name"
              name="username"
              value={formState.username}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email-signup" value="Your email" />
            </div>
            <TextInput
              id="email-signup"
              placeholder="name@company.com"
              name="email"
              value={formState.email}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password-signup" value="Your password" />
            </div>
            <TextInput
              id="password-signup"
              type="password"
              name="password"
              value={formState.password}
              onChange={onChange}
              required
            />
          </div>
          {error && <div className="text-red-500">Error: {error.message}</div>}
          <div className="w-full">
            <Button onClick={handleFormSubmit}>Create your account</Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SignUpModal;
