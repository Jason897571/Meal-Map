import { Modal, Label, TextInput, Button, Checkbox } from 'flowbite-react';

import { LOGIN } from '../../utlis/mutations';
import { useMutation } from '@apollo/client'
import Auth from '../../utlis/auth';


const SignInModal = ({ isOpen, formState, onChange, onClose }) => {



  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log('error', e);
    }
  };






  return (
    <Modal show={isOpen} size="md" onClose={onClose} popup>
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign In</h3>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email-signin" value="Your email" />
            </div>
            <TextInput
              id="email-signin"
              placeholder="email"
              name="email"
              value={formState.email}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password-signin" value="Your password" />
            </div>
            <TextInput
              id="password-signin"
              type="password"
              placeholder="******"
              name="password"
              value={formState.password}
              onChange={onChange}
              required
            />
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <a
              href="#"
              className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
            >
              Lost Password?
            </a>
          </div>
          <div className="w-full">
            <Button onClick={handleFormSubmit}>Log in to your account</Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SignInModal;
