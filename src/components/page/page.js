import React, { useState } from 'react';
import './page.scss';
import './button.scss';
import './Menu/Menu.scss';
import Menu from './Menu/Menu';
import ProfileColumn from './ProfileColumn';
import './ProfileColumnMore.scss';
import Modal from './attention-container';
import ModalDeleteAccount from './ModalDelete/modal-delete';
import ModalChangePassword from './ModalChangePassword/modal-change-password';
import SuccessModal from './SuccessModal/SuccessModal';
import Notifications from './Notifications/Notifications';
import { Router } from '@reach/router';
import GoalCatalog from './GoalsCatalog/index';
import GoalPage from './GoalPage';
//import GoalsFamily from './GoalsFamily';

function Page() {
	const [handleModal, setHandleModal] = useState(false);
	const [deleteModal, setDeleteModal] = useState(false);
	const [changeModal, setChangeModal] = useState(false);
	const [successModal, setSuccessModal] = useState(false);
	const [notesModal, setNotesModal] = useState(false);
	const [profileColumn, setProfileColumn] = useState(false);

	const Change = () => {
		return setHandleModal(!handleModal);
	};
	const Delete = () => {
		return setDeleteModal(!deleteModal);
	};
	const ChangePassword = () => {
		return setChangeModal(!changeModal);
	};
	const Success = () => {
		return setSuccessModal(!successModal);
	};
	const Notes = () => {
		return setNotesModal(!notesModal);
	};
	const Profile = () => {
		return setProfileColumn(!profileColumn);
	};

	return (
		<div className="container-max">
			<div className="backg">
				<div className="back-00">
					<div className="back-0"></div>
				</div>
				{/* <GoalsFamily /> */}
				<div className="back-11">
					<div className="back-1"></div>
					<div className="back-2"></div>
				</div>
			</div>

			<Menu />
			<div className="tools">
				<img
					src="/images/bell.png"
					alt="bell"
					className="bell"
					onClick={() => Notes()}
				/>
				<img
					src="/images/person.png"
					alt="person"
					className="person"
					onClick={() => Profile()}
				/>
			</div>
			<ProfileColumn
				profileColumn={profileColumn}
				Change={() => Change()}
				Delete={() => Delete()}
				ChangePassword={() => ChangePassword()}
				Success={() => Success()}
				Notes={() => Notes()}
			/>
			<Modal showModal={handleModal} Change={() => Change()} />
			<ModalDeleteAccount
				deleteModal={deleteModal}
				Delete={() => Delete()}
			/>
			<ModalChangePassword
				changeModal={changeModal}
				ChangePassword={() => ChangePassword()}
				successModal={successModal}
				Success={() => Success()}
			/>
			<SuccessModal
				successModal={successModal}
				Success={() => Success()}
			/>
			<Notifications notesModal={notesModal} />
			<Router>
				{/* <DefaultPage path="/" /> */}
				<GoalCatalog path="/goal/categories/" />
				<GoalPage path="/goal/:id" />
			</Router>
		</div>
	);
}

export function DefaultPage() {
	return (
		<>
			<div className="back-1"></div>
			<div className="back-2"></div>
		</>
	);
}

export default Page;
