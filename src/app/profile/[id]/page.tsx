export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />

      <p className="mt-2 text-4xl">
        with id{" "}
        <span className="p-2 bg-orange-500 rounded text-black">
          {params.id}
        </span>
      </p>
    </div>
  );
}
