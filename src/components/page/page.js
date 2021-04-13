import React, { useState, useEffect } from 'react';
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
import GoalsFamily from './GoalsFamily/GoalsFamily';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from './actions/actions';

function Page() {
	const [handleModal, setHandleModal] = useState(false);
	const [deleteModal, setDeleteModal] = useState(false);
	const [changeModal, setChangeModal] = useState(false);
	const [successModal, setSuccessModal] = useState(false);
	const [notesModal, setNotesModal] = useState(false);
	const [profileColumn, setProfileColumn] = useState(false);
	const [ notification, setNotification ] = useState(true);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUserData());
	}, []);

	const userData = useSelector((state) => state.userInfo.userData);
	//console.log( userData );

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
			<Menu />
			<div className="tools">
				<div className="bell">

					<img
						// src="/images/bell.png"
						src = { (notification) ? "/images/bell.png" : "/images/bell1.png" }
						alt = "bell"
						
						onClick={() => {
							Notes();
							setNotification(false);
						}}
					/>

				</div>

				<div className="person">
					<img
						src="/images/person.png"
						alt="person"
						
						onClick={() => Profile()}
					/>
				</div>
				
				
			</div>
			<ProfileColumn
				userData={userData}
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
				{/* <DefaultPage path="/*" /> */}
				<GoalCatalog path="/goal/categories/" />
				<GoalsFamily path="/goal/:id" />
			</Router>
		</div>
	);
}

export function DefaultPage() {
	return (
		<div className="back-block__default">
			<div className="back-1"></div>
			<div className="back-2"></div>
		</div>
	);
}

export default Page;
