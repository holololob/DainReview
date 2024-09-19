import NotificationIcon from '@/assets/icons/home/notification.svg'

const Notification = ({ noti }: { noti: number }) => {
  return (
    <div className="relative">
      {noti !== 0 && noti && (
        <div className="absolute right-[-7px] top-[-7px] flex h-5 w-5 items-center justify-center rounded-full bg-red-main text-xs text-white">
          <p className="text-caption-2 font-bold text-white">{noti}</p>
        </div>
      )}
      <NotificationIcon />
    </div>
  )
}

export default Notification
