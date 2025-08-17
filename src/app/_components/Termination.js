import React from 'react';

export default  function Termination () {

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Container with max width for large screens, centered */}

            {/* Eligibility Criteria */}
            {/*<section className="mb-12">*/}
            {/*    <h2 className="text-2xl font-semibold mb-4 text-gray-700">Eligibility Criteria</h2>*/}
            {/*    <p className="mb-4 text-gray-600 text-base md:text-lg">*/}
            {/*        Honorary Membership may be granted to individuals who have made significant contributions to the*/}
            {/*        advancement of clinical medicine. The criteria and procedures for conferring Honorary Membership*/}
            {/*        shall be established by the National Executive Committee*/}
            {/*    </p>*/}
            {/*</section>*/}

            {/* Rights and Privileges */}
            <section className="mb-12">
                {/*<h2 className="text-2xl font-semibold mb-4 text-gray-700">Rights and Privileges</h2>*/}
                <ol className="list-decimal list-inside space-y-3 text-gray-600 text-sm md:text-base">
                    <li>
                        Notice: Prior to termination, a member shall be provided with written notice specifying the
                        grounds for termination and affording an opportunity to respond
                    </li>
                    <li>
                        
                    </li>
                    <li>
                        Resignation: Any member may voluntarily resign from COAZ by submitting written notice to the
                        Secretary General. The resignation shall become effective after 90 days
                    </li>
                </ol>
            </section>
        </div>
    );
}