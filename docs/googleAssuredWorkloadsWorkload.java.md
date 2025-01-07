# `googleAssuredWorkloadsWorkload` Submodule <a name="`googleAssuredWorkloadsWorkload` Submodule" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAssuredWorkloadsWorkload <a name="GoogleAssuredWorkloadsWorkload" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload google_assured_workloads_workload}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_assured_workloads_workload.GoogleAssuredWorkloadsWorkload;

GoogleAssuredWorkloadsWorkload.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .complianceRegime(java.lang.String)
    .displayName(java.lang.String)
    .location(java.lang.String)
    .organization(java.lang.String)
//  .billingAccount(java.lang.String)
//  .enableSovereignControls(java.lang.Boolean)
//  .enableSovereignControls(IResolvable)
//  .id(java.lang.String)
//  .kmsSettings(GoogleAssuredWorkloadsWorkloadKmsSettings)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .partner(java.lang.String)
//  .partnerPermissions(GoogleAssuredWorkloadsWorkloadPartnerPermissions)
//  .partnerServicesBillingAccount(java.lang.String)
//  .provisionedResourcesParent(java.lang.String)
//  .resourceSettings(IResolvable)
//  .resourceSettings(java.util.List<GoogleAssuredWorkloadsWorkloadResourceSettings>)
//  .timeouts(GoogleAssuredWorkloadsWorkloadTimeouts)
//  .violationNotificationsEnabled(java.lang.Boolean)
//  .violationNotificationsEnabled(IResolvable)
//  .workloadOptions(GoogleAssuredWorkloadsWorkloadWorkloadOptions)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.complianceRegime">complianceRegime</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | The organization for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.billingAccount">billingAccount</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.enableSovereignControls">enableSovereignControls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#id GoogleAssuredWorkloadsWorkload#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.kmsSettings">kmsSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings">GoogleAssuredWorkloadsWorkloadKmsSettings</a></code> | kms_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Labels applied to the workload. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.partner">partner</a></code> | <code>java.lang.String</code> | Optional. Partner regime associated with this workload. Possible values: PARTNER_UNSPECIFIED, LOCAL_CONTROLS_BY_S3NS, SOVEREIGN_CONTROLS_BY_T_SYSTEMS, SOVEREIGN_CONTROLS_BY_SIA_MINSAIT, SOVEREIGN_CONTROLS_BY_PSN, SOVEREIGN_CONTROLS_BY_CNTXT, SOVEREIGN_CONTROLS_BY_CNTXT_NO_EKM. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.partnerPermissions">partnerPermissions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissions">GoogleAssuredWorkloadsWorkloadPartnerPermissions</a></code> | partner_permissions block. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.partnerServicesBillingAccount">partnerServicesBillingAccount</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.provisionedResourcesParent">provisionedResourcesParent</a></code> | <code>java.lang.String</code> | Input only. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.resourceSettings">resourceSettings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettings">GoogleAssuredWorkloadsWorkloadResourceSettings</a>></code> | resource_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts">GoogleAssuredWorkloadsWorkloadTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.violationNotificationsEnabled">violationNotificationsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.workloadOptions">workloadOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptions">GoogleAssuredWorkloadsWorkloadWorkloadOptions</a></code> | workload_options block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `complianceRegime`<sup>Required</sup> <a name="complianceRegime" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.complianceRegime"></a>

- *Type:* java.lang.String

Required.

Immutable. Compliance Regime associated with this workload. Possible values: COMPLIANCE_REGIME_UNSPECIFIED, IL4, CJIS, FEDRAMP_HIGH, FEDRAMP_MODERATE, US_REGIONAL_ACCESS, HIPAA, HITRUST, EU_REGIONS_AND_SUPPORT, CA_REGIONS_AND_SUPPORT, ITAR, AU_REGIONS_AND_US_SUPPORT, ASSURED_WORKLOADS_FOR_PARTNERS, ISR_REGIONS, ISR_REGIONS_AND_SUPPORT, CA_PROTECTED_B, IL5, IL2, JP_REGIONS_AND_SUPPORT, KSA_REGIONS_AND_SUPPORT_WITH_SOVEREIGNTY_CONTROLS, REGIONAL_CONTROLS, HEALTHCARE_AND_LIFE_SCIENCES_CONTROLS, HEALTHCARE_AND_LIFE_SCIENCES_CONTROLS_WITH_US_SUPPORT, IRS_1075

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#compliance_regime GoogleAssuredWorkloadsWorkload#compliance_regime}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Required.

The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#display_name GoogleAssuredWorkloadsWorkload#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#location GoogleAssuredWorkloadsWorkload#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

The organization for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#organization GoogleAssuredWorkloadsWorkload#organization}

---

##### `billingAccount`<sup>Optional</sup> <a name="billingAccount" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.billingAccount"></a>

- *Type:* java.lang.String

Optional.

Input only. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#billing_account GoogleAssuredWorkloadsWorkload#billing_account}

---

##### `enableSovereignControls`<sup>Optional</sup> <a name="enableSovereignControls" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.enableSovereignControls"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#enable_sovereign_controls GoogleAssuredWorkloadsWorkload#enable_sovereign_controls}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#id GoogleAssuredWorkloadsWorkload#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsSettings`<sup>Optional</sup> <a name="kmsSettings" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.kmsSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings">GoogleAssuredWorkloadsWorkloadKmsSettings</a>

kms_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#kms_settings GoogleAssuredWorkloadsWorkload#kms_settings}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Labels applied to the workload.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#labels GoogleAssuredWorkloadsWorkload#labels}

---

##### `partner`<sup>Optional</sup> <a name="partner" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.partner"></a>

- *Type:* java.lang.String

Optional. Partner regime associated with this workload. Possible values: PARTNER_UNSPECIFIED, LOCAL_CONTROLS_BY_S3NS, SOVEREIGN_CONTROLS_BY_T_SYSTEMS, SOVEREIGN_CONTROLS_BY_SIA_MINSAIT, SOVEREIGN_CONTROLS_BY_PSN, SOVEREIGN_CONTROLS_BY_CNTXT, SOVEREIGN_CONTROLS_BY_CNTXT_NO_EKM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#partner GoogleAssuredWorkloadsWorkload#partner}

---

##### `partnerPermissions`<sup>Optional</sup> <a name="partnerPermissions" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.partnerPermissions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissions">GoogleAssuredWorkloadsWorkloadPartnerPermissions</a>

partner_permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#partner_permissions GoogleAssuredWorkloadsWorkload#partner_permissions}

---

##### `partnerServicesBillingAccount`<sup>Optional</sup> <a name="partnerServicesBillingAccount" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.partnerServicesBillingAccount"></a>

- *Type:* java.lang.String

Optional.

Input only. Billing account necessary for purchasing services from Sovereign Partners. This field is required for creating SIA/PSN/CNTXT partner workloads. The caller should have 'billing.resourceAssociations.create' IAM permission on this billing-account. The format of this string is billingAccounts/AAAAAA-BBBBBB-CCCCCC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#partner_services_billing_account GoogleAssuredWorkloadsWorkload#partner_services_billing_account}

---

##### `provisionedResourcesParent`<sup>Optional</sup> <a name="provisionedResourcesParent" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.provisionedResourcesParent"></a>

- *Type:* java.lang.String

Input only.

The parent resource for the resources managed by this Assured Workload. May be either empty or a folder resource which is a child of the Workload parent. If not specified all resources are created under the parent organization. Format: folders/{folder_id}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#provisioned_resources_parent GoogleAssuredWorkloadsWorkload#provisioned_resources_parent}

---

##### `resourceSettings`<sup>Optional</sup> <a name="resourceSettings" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.resourceSettings"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettings">GoogleAssuredWorkloadsWorkloadResourceSettings</a>>

resource_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#resource_settings GoogleAssuredWorkloadsWorkload#resource_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts">GoogleAssuredWorkloadsWorkloadTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#timeouts GoogleAssuredWorkloadsWorkload#timeouts}

---

##### `violationNotificationsEnabled`<sup>Optional</sup> <a name="violationNotificationsEnabled" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.violationNotificationsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional.

Indicates whether the e-mail notification for a violation is enabled for a workload. This value will be by default True, and if not present will be considered as true. This should only be updated via updateWorkload call. Any Changes to this field during the createWorkload call will not be honored. This will always be true while creating the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#violation_notifications_enabled GoogleAssuredWorkloadsWorkload#violation_notifications_enabled}

---

##### `workloadOptions`<sup>Optional</sup> <a name="workloadOptions" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.workloadOptions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptions">GoogleAssuredWorkloadsWorkloadWorkloadOptions</a>

workload_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#workload_options GoogleAssuredWorkloadsWorkload#workload_options}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putKmsSettings">putKmsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putPartnerPermissions">putPartnerPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putResourceSettings">putResourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putWorkloadOptions">putWorkloadOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetBillingAccount">resetBillingAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetEnableSovereignControls">resetEnableSovereignControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetKmsSettings">resetKmsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetPartner">resetPartner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetPartnerPermissions">resetPartnerPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetPartnerServicesBillingAccount">resetPartnerServicesBillingAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetProvisionedResourcesParent">resetProvisionedResourcesParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetResourceSettings">resetResourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetViolationNotificationsEnabled">resetViolationNotificationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetWorkloadOptions">resetWorkloadOptions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putKmsSettings` <a name="putKmsSettings" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putKmsSettings"></a>

```java
public void putKmsSettings(GoogleAssuredWorkloadsWorkloadKmsSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putKmsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings">GoogleAssuredWorkloadsWorkloadKmsSettings</a>

---

##### `putPartnerPermissions` <a name="putPartnerPermissions" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putPartnerPermissions"></a>

```java
public void putPartnerPermissions(GoogleAssuredWorkloadsWorkloadPartnerPermissions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putPartnerPermissions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissions">GoogleAssuredWorkloadsWorkloadPartnerPermissions</a>

---

##### `putResourceSettings` <a name="putResourceSettings" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putResourceSettings"></a>

```java
public void putResourceSettings(IResolvable OR java.util.List<GoogleAssuredWorkloadsWorkloadResourceSettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putResourceSettings.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettings">GoogleAssuredWorkloadsWorkloadResourceSettings</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putTimeouts"></a>

```java
public void putTimeouts(GoogleAssuredWorkloadsWorkloadTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts">GoogleAssuredWorkloadsWorkloadTimeouts</a>

---

##### `putWorkloadOptions` <a name="putWorkloadOptions" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putWorkloadOptions"></a>

```java
public void putWorkloadOptions(GoogleAssuredWorkloadsWorkloadWorkloadOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putWorkloadOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptions">GoogleAssuredWorkloadsWorkloadWorkloadOptions</a>

---

##### `resetBillingAccount` <a name="resetBillingAccount" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetBillingAccount"></a>

```java
public void resetBillingAccount()
```

##### `resetEnableSovereignControls` <a name="resetEnableSovereignControls" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetEnableSovereignControls"></a>

```java
public void resetEnableSovereignControls()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetId"></a>

```java
public void resetId()
```

##### `resetKmsSettings` <a name="resetKmsSettings" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetKmsSettings"></a>

```java
public void resetKmsSettings()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetPartner` <a name="resetPartner" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetPartner"></a>

```java
public void resetPartner()
```

##### `resetPartnerPermissions` <a name="resetPartnerPermissions" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetPartnerPermissions"></a>

```java
public void resetPartnerPermissions()
```

##### `resetPartnerServicesBillingAccount` <a name="resetPartnerServicesBillingAccount" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetPartnerServicesBillingAccount"></a>

```java
public void resetPartnerServicesBillingAccount()
```

##### `resetProvisionedResourcesParent` <a name="resetProvisionedResourcesParent" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetProvisionedResourcesParent"></a>

```java
public void resetProvisionedResourcesParent()
```

##### `resetResourceSettings` <a name="resetResourceSettings" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetResourceSettings"></a>

```java
public void resetResourceSettings()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetViolationNotificationsEnabled` <a name="resetViolationNotificationsEnabled" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetViolationNotificationsEnabled"></a>

```java
public void resetViolationNotificationsEnabled()
```

##### `resetWorkloadOptions` <a name="resetWorkloadOptions" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetWorkloadOptions"></a>

```java
public void resetWorkloadOptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleAssuredWorkloadsWorkload resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_assured_workloads_workload.GoogleAssuredWorkloadsWorkload;

GoogleAssuredWorkloadsWorkload.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_assured_workloads_workload.GoogleAssuredWorkloadsWorkload;

GoogleAssuredWorkloadsWorkload.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_assured_workloads_workload.GoogleAssuredWorkloadsWorkload;

GoogleAssuredWorkloadsWorkload.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_assured_workloads_workload.GoogleAssuredWorkloadsWorkload;

GoogleAssuredWorkloadsWorkload.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleAssuredWorkloadsWorkload.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleAssuredWorkloadsWorkload resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleAssuredWorkloadsWorkload to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleAssuredWorkloadsWorkload that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAssuredWorkloadsWorkload to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.complianceStatus">complianceStatus</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList">GoogleAssuredWorkloadsWorkloadComplianceStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.compliantButDisallowedServices">compliantButDisallowedServices</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.ekmProvisioningResponse">ekmProvisioningResponse</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList">GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.kajEnrollmentState">kajEnrollmentState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.kmsSettings">kmsSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference">GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.partnerPermissions">partnerPermissions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference">GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList">GoogleAssuredWorkloadsWorkloadResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.resourceSettings">resourceSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList">GoogleAssuredWorkloadsWorkloadResourceSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.saaEnrollmentResponse">saaEnrollmentResponse</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList">GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference">GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.workloadOptions">workloadOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference">GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.billingAccountInput">billingAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.complianceRegimeInput">complianceRegimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.enableSovereignControlsInput">enableSovereignControlsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.kmsSettingsInput">kmsSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings">GoogleAssuredWorkloadsWorkloadKmsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.partnerInput">partnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.partnerPermissionsInput">partnerPermissionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissions">GoogleAssuredWorkloadsWorkloadPartnerPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.partnerServicesBillingAccountInput">partnerServicesBillingAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.provisionedResourcesParentInput">provisionedResourcesParentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.resourceSettingsInput">resourceSettingsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettings">GoogleAssuredWorkloadsWorkloadResourceSettings</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts">GoogleAssuredWorkloadsWorkloadTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.violationNotificationsEnabledInput">violationNotificationsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.workloadOptionsInput">workloadOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptions">GoogleAssuredWorkloadsWorkloadWorkloadOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.billingAccount">billingAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.complianceRegime">complianceRegime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.enableSovereignControls">enableSovereignControls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.partner">partner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.partnerServicesBillingAccount">partnerServicesBillingAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.provisionedResourcesParent">provisionedResourcesParent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.violationNotificationsEnabled">violationNotificationsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `complianceStatus`<sup>Required</sup> <a name="complianceStatus" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.complianceStatus"></a>

```java
public GoogleAssuredWorkloadsWorkloadComplianceStatusList getComplianceStatus();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList">GoogleAssuredWorkloadsWorkloadComplianceStatusList</a>

---

##### `compliantButDisallowedServices`<sup>Required</sup> <a name="compliantButDisallowedServices" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.compliantButDisallowedServices"></a>

```java
public java.util.List<java.lang.String> getCompliantButDisallowedServices();
```

- *Type:* java.util.List<java.lang.String>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `ekmProvisioningResponse`<sup>Required</sup> <a name="ekmProvisioningResponse" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.ekmProvisioningResponse"></a>

```java
public GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList getEkmProvisioningResponse();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList">GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList</a>

---

##### `kajEnrollmentState`<sup>Required</sup> <a name="kajEnrollmentState" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.kajEnrollmentState"></a>

```java
public java.lang.String getKajEnrollmentState();
```

- *Type:* java.lang.String

---

##### `kmsSettings`<sup>Required</sup> <a name="kmsSettings" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.kmsSettings"></a>

```java
public GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference getKmsSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference">GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `partnerPermissions`<sup>Required</sup> <a name="partnerPermissions" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.partnerPermissions"></a>

```java
public GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference getPartnerPermissions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference">GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.resources"></a>

```java
public GoogleAssuredWorkloadsWorkloadResourcesList getResources();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList">GoogleAssuredWorkloadsWorkloadResourcesList</a>

---

##### `resourceSettings`<sup>Required</sup> <a name="resourceSettings" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.resourceSettings"></a>

```java
public GoogleAssuredWorkloadsWorkloadResourceSettingsList getResourceSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList">GoogleAssuredWorkloadsWorkloadResourceSettingsList</a>

---

##### `saaEnrollmentResponse`<sup>Required</sup> <a name="saaEnrollmentResponse" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.saaEnrollmentResponse"></a>

```java
public GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList getSaaEnrollmentResponse();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList">GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.timeouts"></a>

```java
public GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference">GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference</a>

---

##### `workloadOptions`<sup>Required</sup> <a name="workloadOptions" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.workloadOptions"></a>

```java
public GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference getWorkloadOptions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference">GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference</a>

---

##### `billingAccountInput`<sup>Optional</sup> <a name="billingAccountInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.billingAccountInput"></a>

```java
public java.lang.String getBillingAccountInput();
```

- *Type:* java.lang.String

---

##### `complianceRegimeInput`<sup>Optional</sup> <a name="complianceRegimeInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.complianceRegimeInput"></a>

```java
public java.lang.String getComplianceRegimeInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enableSovereignControlsInput`<sup>Optional</sup> <a name="enableSovereignControlsInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.enableSovereignControlsInput"></a>

```java
public java.lang.Object getEnableSovereignControlsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsSettingsInput`<sup>Optional</sup> <a name="kmsSettingsInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.kmsSettingsInput"></a>

```java
public GoogleAssuredWorkloadsWorkloadKmsSettings getKmsSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings">GoogleAssuredWorkloadsWorkloadKmsSettings</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `partnerInput`<sup>Optional</sup> <a name="partnerInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.partnerInput"></a>

```java
public java.lang.String getPartnerInput();
```

- *Type:* java.lang.String

---

##### `partnerPermissionsInput`<sup>Optional</sup> <a name="partnerPermissionsInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.partnerPermissionsInput"></a>

```java
public GoogleAssuredWorkloadsWorkloadPartnerPermissions getPartnerPermissionsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissions">GoogleAssuredWorkloadsWorkloadPartnerPermissions</a>

---

##### `partnerServicesBillingAccountInput`<sup>Optional</sup> <a name="partnerServicesBillingAccountInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.partnerServicesBillingAccountInput"></a>

```java
public java.lang.String getPartnerServicesBillingAccountInput();
```

- *Type:* java.lang.String

---

##### `provisionedResourcesParentInput`<sup>Optional</sup> <a name="provisionedResourcesParentInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.provisionedResourcesParentInput"></a>

```java
public java.lang.String getProvisionedResourcesParentInput();
```

- *Type:* java.lang.String

---

##### `resourceSettingsInput`<sup>Optional</sup> <a name="resourceSettingsInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.resourceSettingsInput"></a>

```java
public java.lang.Object getResourceSettingsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettings">GoogleAssuredWorkloadsWorkloadResourceSettings</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts">GoogleAssuredWorkloadsWorkloadTimeouts</a>

---

##### `violationNotificationsEnabledInput`<sup>Optional</sup> <a name="violationNotificationsEnabledInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.violationNotificationsEnabledInput"></a>

```java
public java.lang.Object getViolationNotificationsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `workloadOptionsInput`<sup>Optional</sup> <a name="workloadOptionsInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.workloadOptionsInput"></a>

```java
public GoogleAssuredWorkloadsWorkloadWorkloadOptions getWorkloadOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptions">GoogleAssuredWorkloadsWorkloadWorkloadOptions</a>

---

##### `billingAccount`<sup>Required</sup> <a name="billingAccount" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.billingAccount"></a>

```java
public java.lang.String getBillingAccount();
```

- *Type:* java.lang.String

---

##### `complianceRegime`<sup>Required</sup> <a name="complianceRegime" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.complianceRegime"></a>

```java
public java.lang.String getComplianceRegime();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enableSovereignControls`<sup>Required</sup> <a name="enableSovereignControls" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.enableSovereignControls"></a>

```java
public java.lang.Object getEnableSovereignControls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `partner`<sup>Required</sup> <a name="partner" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.partner"></a>

```java
public java.lang.String getPartner();
```

- *Type:* java.lang.String

---

##### `partnerServicesBillingAccount`<sup>Required</sup> <a name="partnerServicesBillingAccount" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.partnerServicesBillingAccount"></a>

```java
public java.lang.String getPartnerServicesBillingAccount();
```

- *Type:* java.lang.String

---

##### `provisionedResourcesParent`<sup>Required</sup> <a name="provisionedResourcesParent" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.provisionedResourcesParent"></a>

```java
public java.lang.String getProvisionedResourcesParent();
```

- *Type:* java.lang.String

---

##### `violationNotificationsEnabled`<sup>Required</sup> <a name="violationNotificationsEnabled" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.violationNotificationsEnabled"></a>

```java
public java.lang.Object getViolationNotificationsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAssuredWorkloadsWorkloadComplianceStatus <a name="GoogleAssuredWorkloadsWorkloadComplianceStatus" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_assured_workloads_workload.GoogleAssuredWorkloadsWorkloadComplianceStatus;

GoogleAssuredWorkloadsWorkloadComplianceStatus.builder()
    .build();
```


### GoogleAssuredWorkloadsWorkloadConfig <a name="GoogleAssuredWorkloadsWorkloadConfig" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_assured_workloads_workload.GoogleAssuredWorkloadsWorkloadConfig;

GoogleAssuredWorkloadsWorkloadConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .complianceRegime(java.lang.String)
    .displayName(java.lang.String)
    .location(java.lang.String)
    .organization(java.lang.String)
//  .billingAccount(java.lang.String)
//  .enableSovereignControls(java.lang.Boolean)
//  .enableSovereignControls(IResolvable)
//  .id(java.lang.String)
//  .kmsSettings(GoogleAssuredWorkloadsWorkloadKmsSettings)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .partner(java.lang.String)
//  .partnerPermissions(GoogleAssuredWorkloadsWorkloadPartnerPermissions)
//  .partnerServicesBillingAccount(java.lang.String)
//  .provisionedResourcesParent(java.lang.String)
//  .resourceSettings(IResolvable)
//  .resourceSettings(java.util.List<GoogleAssuredWorkloadsWorkloadResourceSettings>)
//  .timeouts(GoogleAssuredWorkloadsWorkloadTimeouts)
//  .violationNotificationsEnabled(java.lang.Boolean)
//  .violationNotificationsEnabled(IResolvable)
//  .workloadOptions(GoogleAssuredWorkloadsWorkloadWorkloadOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.complianceRegime">complianceRegime</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | The organization for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.billingAccount">billingAccount</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.enableSovereignControls">enableSovereignControls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#id GoogleAssuredWorkloadsWorkload#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.kmsSettings">kmsSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings">GoogleAssuredWorkloadsWorkloadKmsSettings</a></code> | kms_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Labels applied to the workload. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.partner">partner</a></code> | <code>java.lang.String</code> | Optional. Partner regime associated with this workload. Possible values: PARTNER_UNSPECIFIED, LOCAL_CONTROLS_BY_S3NS, SOVEREIGN_CONTROLS_BY_T_SYSTEMS, SOVEREIGN_CONTROLS_BY_SIA_MINSAIT, SOVEREIGN_CONTROLS_BY_PSN, SOVEREIGN_CONTROLS_BY_CNTXT, SOVEREIGN_CONTROLS_BY_CNTXT_NO_EKM. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.partnerPermissions">partnerPermissions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissions">GoogleAssuredWorkloadsWorkloadPartnerPermissions</a></code> | partner_permissions block. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.partnerServicesBillingAccount">partnerServicesBillingAccount</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.provisionedResourcesParent">provisionedResourcesParent</a></code> | <code>java.lang.String</code> | Input only. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.resourceSettings">resourceSettings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettings">GoogleAssuredWorkloadsWorkloadResourceSettings</a>></code> | resource_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts">GoogleAssuredWorkloadsWorkloadTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.violationNotificationsEnabled">violationNotificationsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.workloadOptions">workloadOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptions">GoogleAssuredWorkloadsWorkloadWorkloadOptions</a></code> | workload_options block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `complianceRegime`<sup>Required</sup> <a name="complianceRegime" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.complianceRegime"></a>

```java
public java.lang.String getComplianceRegime();
```

- *Type:* java.lang.String

Required.

Immutable. Compliance Regime associated with this workload. Possible values: COMPLIANCE_REGIME_UNSPECIFIED, IL4, CJIS, FEDRAMP_HIGH, FEDRAMP_MODERATE, US_REGIONAL_ACCESS, HIPAA, HITRUST, EU_REGIONS_AND_SUPPORT, CA_REGIONS_AND_SUPPORT, ITAR, AU_REGIONS_AND_US_SUPPORT, ASSURED_WORKLOADS_FOR_PARTNERS, ISR_REGIONS, ISR_REGIONS_AND_SUPPORT, CA_PROTECTED_B, IL5, IL2, JP_REGIONS_AND_SUPPORT, KSA_REGIONS_AND_SUPPORT_WITH_SOVEREIGNTY_CONTROLS, REGIONAL_CONTROLS, HEALTHCARE_AND_LIFE_SCIENCES_CONTROLS, HEALTHCARE_AND_LIFE_SCIENCES_CONTROLS_WITH_US_SUPPORT, IRS_1075

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#compliance_regime GoogleAssuredWorkloadsWorkload#compliance_regime}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Required.

The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#display_name GoogleAssuredWorkloadsWorkload#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#location GoogleAssuredWorkloadsWorkload#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

The organization for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#organization GoogleAssuredWorkloadsWorkload#organization}

---

##### `billingAccount`<sup>Optional</sup> <a name="billingAccount" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.billingAccount"></a>

```java
public java.lang.String getBillingAccount();
```

- *Type:* java.lang.String

Optional.

Input only. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#billing_account GoogleAssuredWorkloadsWorkload#billing_account}

---

##### `enableSovereignControls`<sup>Optional</sup> <a name="enableSovereignControls" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.enableSovereignControls"></a>

```java
public java.lang.Object getEnableSovereignControls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#enable_sovereign_controls GoogleAssuredWorkloadsWorkload#enable_sovereign_controls}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#id GoogleAssuredWorkloadsWorkload#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsSettings`<sup>Optional</sup> <a name="kmsSettings" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.kmsSettings"></a>

```java
public GoogleAssuredWorkloadsWorkloadKmsSettings getKmsSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings">GoogleAssuredWorkloadsWorkloadKmsSettings</a>

kms_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#kms_settings GoogleAssuredWorkloadsWorkload#kms_settings}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Labels applied to the workload.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#labels GoogleAssuredWorkloadsWorkload#labels}

---

##### `partner`<sup>Optional</sup> <a name="partner" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.partner"></a>

```java
public java.lang.String getPartner();
```

- *Type:* java.lang.String

Optional. Partner regime associated with this workload. Possible values: PARTNER_UNSPECIFIED, LOCAL_CONTROLS_BY_S3NS, SOVEREIGN_CONTROLS_BY_T_SYSTEMS, SOVEREIGN_CONTROLS_BY_SIA_MINSAIT, SOVEREIGN_CONTROLS_BY_PSN, SOVEREIGN_CONTROLS_BY_CNTXT, SOVEREIGN_CONTROLS_BY_CNTXT_NO_EKM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#partner GoogleAssuredWorkloadsWorkload#partner}

---

##### `partnerPermissions`<sup>Optional</sup> <a name="partnerPermissions" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.partnerPermissions"></a>

```java
public GoogleAssuredWorkloadsWorkloadPartnerPermissions getPartnerPermissions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissions">GoogleAssuredWorkloadsWorkloadPartnerPermissions</a>

partner_permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#partner_permissions GoogleAssuredWorkloadsWorkload#partner_permissions}

---

##### `partnerServicesBillingAccount`<sup>Optional</sup> <a name="partnerServicesBillingAccount" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.partnerServicesBillingAccount"></a>

```java
public java.lang.String getPartnerServicesBillingAccount();
```

- *Type:* java.lang.String

Optional.

Input only. Billing account necessary for purchasing services from Sovereign Partners. This field is required for creating SIA/PSN/CNTXT partner workloads. The caller should have 'billing.resourceAssociations.create' IAM permission on this billing-account. The format of this string is billingAccounts/AAAAAA-BBBBBB-CCCCCC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#partner_services_billing_account GoogleAssuredWorkloadsWorkload#partner_services_billing_account}

---

##### `provisionedResourcesParent`<sup>Optional</sup> <a name="provisionedResourcesParent" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.provisionedResourcesParent"></a>

```java
public java.lang.String getProvisionedResourcesParent();
```

- *Type:* java.lang.String

Input only.

The parent resource for the resources managed by this Assured Workload. May be either empty or a folder resource which is a child of the Workload parent. If not specified all resources are created under the parent organization. Format: folders/{folder_id}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#provisioned_resources_parent GoogleAssuredWorkloadsWorkload#provisioned_resources_parent}

---

##### `resourceSettings`<sup>Optional</sup> <a name="resourceSettings" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.resourceSettings"></a>

```java
public java.lang.Object getResourceSettings();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettings">GoogleAssuredWorkloadsWorkloadResourceSettings</a>>

resource_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#resource_settings GoogleAssuredWorkloadsWorkload#resource_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.timeouts"></a>

```java
public GoogleAssuredWorkloadsWorkloadTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts">GoogleAssuredWorkloadsWorkloadTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#timeouts GoogleAssuredWorkloadsWorkload#timeouts}

---

##### `violationNotificationsEnabled`<sup>Optional</sup> <a name="violationNotificationsEnabled" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.violationNotificationsEnabled"></a>

```java
public java.lang.Object getViolationNotificationsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional.

Indicates whether the e-mail notification for a violation is enabled for a workload. This value will be by default True, and if not present will be considered as true. This should only be updated via updateWorkload call. Any Changes to this field during the createWorkload call will not be honored. This will always be true while creating the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#violation_notifications_enabled GoogleAssuredWorkloadsWorkload#violation_notifications_enabled}

---

##### `workloadOptions`<sup>Optional</sup> <a name="workloadOptions" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.workloadOptions"></a>

```java
public GoogleAssuredWorkloadsWorkloadWorkloadOptions getWorkloadOptions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptions">GoogleAssuredWorkloadsWorkloadWorkloadOptions</a>

workload_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#workload_options GoogleAssuredWorkloadsWorkload#workload_options}

---

### GoogleAssuredWorkloadsWorkloadEkmProvisioningResponse <a name="GoogleAssuredWorkloadsWorkloadEkmProvisioningResponse" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponse.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_assured_workloads_workload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponse;

GoogleAssuredWorkloadsWorkloadEkmProvisioningResponse.builder()
    .build();
```


### GoogleAssuredWorkloadsWorkloadKmsSettings <a name="GoogleAssuredWorkloadsWorkloadKmsSettings" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_assured_workloads_workload.GoogleAssuredWorkloadsWorkloadKmsSettings;

GoogleAssuredWorkloadsWorkloadKmsSettings.builder()
    .nextRotationTime(java.lang.String)
    .rotationPeriod(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings.property.nextRotationTime">nextRotationTime</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings.property.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.String</code> | Required. |

---

##### `nextRotationTime`<sup>Required</sup> <a name="nextRotationTime" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings.property.nextRotationTime"></a>

```java
public java.lang.String getNextRotationTime();
```

- *Type:* java.lang.String

Required.

Input only. Immutable. The time at which the Key Management Service will automatically create a new version of the crypto key and mark it as the primary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#next_rotation_time GoogleAssuredWorkloadsWorkload#next_rotation_time}

---

##### `rotationPeriod`<sup>Required</sup> <a name="rotationPeriod" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings.property.rotationPeriod"></a>

```java
public java.lang.String getRotationPeriod();
```

- *Type:* java.lang.String

Required.

Input only. Immutable. will be advanced by this period when the Key Management Service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#rotation_period GoogleAssuredWorkloadsWorkload#rotation_period}

---

### GoogleAssuredWorkloadsWorkloadPartnerPermissions <a name="GoogleAssuredWorkloadsWorkloadPartnerPermissions" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_assured_workloads_workload.GoogleAssuredWorkloadsWorkloadPartnerPermissions;

GoogleAssuredWorkloadsWorkloadPartnerPermissions.builder()
//  .assuredWorkloadsMonitoring(java.lang.Boolean)
//  .assuredWorkloadsMonitoring(IResolvable)
//  .dataLogsViewer(java.lang.Boolean)
//  .dataLogsViewer(IResolvable)
//  .serviceAccessApprover(java.lang.Boolean)
//  .serviceAccessApprover(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissions.property.assuredWorkloadsMonitoring">assuredWorkloadsMonitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. Allow partner to view violation alerts. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissions.property.dataLogsViewer">dataLogsViewer</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow the partner to view inspectability logs and monitoring violations. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissions.property.serviceAccessApprover">serviceAccessApprover</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. Allow partner to view access approval logs. |

---

##### `assuredWorkloadsMonitoring`<sup>Optional</sup> <a name="assuredWorkloadsMonitoring" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissions.property.assuredWorkloadsMonitoring"></a>

```java
public java.lang.Object getAssuredWorkloadsMonitoring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional. Allow partner to view violation alerts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#assured_workloads_monitoring GoogleAssuredWorkloadsWorkload#assured_workloads_monitoring}

---

##### `dataLogsViewer`<sup>Optional</sup> <a name="dataLogsViewer" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissions.property.dataLogsViewer"></a>

```java
public java.lang.Object getDataLogsViewer();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow the partner to view inspectability logs and monitoring violations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#data_logs_viewer GoogleAssuredWorkloadsWorkload#data_logs_viewer}

---

##### `serviceAccessApprover`<sup>Optional</sup> <a name="serviceAccessApprover" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissions.property.serviceAccessApprover"></a>

```java
public java.lang.Object getServiceAccessApprover();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional. Allow partner to view access approval logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#service_access_approver GoogleAssuredWorkloadsWorkload#service_access_approver}

---

### GoogleAssuredWorkloadsWorkloadResources <a name="GoogleAssuredWorkloadsWorkloadResources" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_assured_workloads_workload.GoogleAssuredWorkloadsWorkloadResources;

GoogleAssuredWorkloadsWorkloadResources.builder()
    .build();
```


### GoogleAssuredWorkloadsWorkloadResourceSettings <a name="GoogleAssuredWorkloadsWorkloadResourceSettings" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_assured_workloads_workload.GoogleAssuredWorkloadsWorkloadResourceSettings;

GoogleAssuredWorkloadsWorkloadResourceSettings.builder()
//  .displayName(java.lang.String)
//  .resourceId(java.lang.String)
//  .resourceType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettings.property.displayName">displayName</a></code> | <code>java.lang.String</code> | User-assigned resource display name. If not empty it will be used to create a resource with the specified name. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettings.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Resource identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettings.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Indicates the type of resource. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettings.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

User-assigned resource display name. If not empty it will be used to create a resource with the specified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#display_name GoogleAssuredWorkloadsWorkload#display_name}

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettings.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

Resource identifier.

For a project this represents projectId. If the project is already taken, the workload creation will fail. For KeyRing, this represents the keyring_id. For a folder, don't set this value as folder_id is assigned by Google.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#resource_id GoogleAssuredWorkloadsWorkload#resource_id}

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettings.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

Indicates the type of resource.

This field should be specified to correspond the id to the right project type (CONSUMER_PROJECT or ENCRYPTION_KEYS_PROJECT) Possible values: RESOURCE_TYPE_UNSPECIFIED, CONSUMER_PROJECT, ENCRYPTION_KEYS_PROJECT, KEYRING, CONSUMER_FOLDER

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#resource_type GoogleAssuredWorkloadsWorkload#resource_type}

---

### GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponse <a name="GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponse" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponse.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_assured_workloads_workload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponse;

GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponse.builder()
    .build();
```


### GoogleAssuredWorkloadsWorkloadTimeouts <a name="GoogleAssuredWorkloadsWorkloadTimeouts" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_assured_workloads_workload.GoogleAssuredWorkloadsWorkloadTimeouts;

GoogleAssuredWorkloadsWorkloadTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#create GoogleAssuredWorkloadsWorkload#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#delete GoogleAssuredWorkloadsWorkload#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#update GoogleAssuredWorkloadsWorkload#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#create GoogleAssuredWorkloadsWorkload#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#delete GoogleAssuredWorkloadsWorkload#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#update GoogleAssuredWorkloadsWorkload#update}.

---

### GoogleAssuredWorkloadsWorkloadWorkloadOptions <a name="GoogleAssuredWorkloadsWorkloadWorkloadOptions" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_assured_workloads_workload.GoogleAssuredWorkloadsWorkloadWorkloadOptions;

GoogleAssuredWorkloadsWorkloadWorkloadOptions.builder()
//  .kajEnrollmentType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptions.property.kajEnrollmentType">kajEnrollmentType</a></code> | <code>java.lang.String</code> | Indicates type of KAJ enrollment for the workload. |

---

##### `kajEnrollmentType`<sup>Optional</sup> <a name="kajEnrollmentType" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptions.property.kajEnrollmentType"></a>

```java
public java.lang.String getKajEnrollmentType();
```

- *Type:* java.lang.String

Indicates type of KAJ enrollment for the workload.

Currently, only specifiying KEY_ACCESS_TRANSPARENCY_OFF is implemented to not enroll in KAT-level KAJ enrollment for Regional Controls workloads. Possible values: KAJ_ENROLLMENT_TYPE_UNSPECIFIED, FULL_KAJ, EKM_ONLY, KEY_ACCESS_TRANSPARENCY_OFF

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#kaj_enrollment_type GoogleAssuredWorkloadsWorkload#kaj_enrollment_type}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAssuredWorkloadsWorkloadComplianceStatusList <a name="GoogleAssuredWorkloadsWorkloadComplianceStatusList" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_assured_workloads_workload.GoogleAssuredWorkloadsWorkloadComplianceStatusList;

new GoogleAssuredWorkloadsWorkloadComplianceStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.get"></a>

```java
public GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference <a name="GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_assured_workloads_workload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference;

new GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.property.acknowledgedViolationCount">acknowledgedViolationCount</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.property.activeViolationCount">activeViolationCount</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatus">GoogleAssuredWorkloadsWorkloadComplianceStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acknowledgedViolationCount`<sup>Required</sup> <a name="acknowledgedViolationCount" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.property.acknowledgedViolationCount"></a>

```java
public java.util.List<java.lang.Number> getAcknowledgedViolationCount();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `activeViolationCount`<sup>Required</sup> <a name="activeViolationCount" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.property.activeViolationCount"></a>

```java
public java.util.List<java.lang.Number> getActiveViolationCount();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.property.internalValue"></a>

```java
public GoogleAssuredWorkloadsWorkloadComplianceStatus getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatus">GoogleAssuredWorkloadsWorkloadComplianceStatus</a>

---


### GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList <a name="GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_assured_workloads_workload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList;

new GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.get"></a>

```java
public GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference <a name="GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_assured_workloads_workload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference;

new GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.ekmProvisioningErrorDomain">ekmProvisioningErrorDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.ekmProvisioningErrorMapping">ekmProvisioningErrorMapping</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.ekmProvisioningState">ekmProvisioningState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponse">GoogleAssuredWorkloadsWorkloadEkmProvisioningResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ekmProvisioningErrorDomain`<sup>Required</sup> <a name="ekmProvisioningErrorDomain" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.ekmProvisioningErrorDomain"></a>

```java
public java.lang.String getEkmProvisioningErrorDomain();
```

- *Type:* java.lang.String

---

##### `ekmProvisioningErrorMapping`<sup>Required</sup> <a name="ekmProvisioningErrorMapping" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.ekmProvisioningErrorMapping"></a>

```java
public java.lang.String getEkmProvisioningErrorMapping();
```

- *Type:* java.lang.String

---

##### `ekmProvisioningState`<sup>Required</sup> <a name="ekmProvisioningState" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.ekmProvisioningState"></a>

```java
public java.lang.String getEkmProvisioningState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.internalValue"></a>

```java
public GoogleAssuredWorkloadsWorkloadEkmProvisioningResponse getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponse">GoogleAssuredWorkloadsWorkloadEkmProvisioningResponse</a>

---


### GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference <a name="GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_assured_workloads_workload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference;

new GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.nextRotationTimeInput">nextRotationTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.rotationPeriodInput">rotationPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.nextRotationTime">nextRotationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings">GoogleAssuredWorkloadsWorkloadKmsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nextRotationTimeInput`<sup>Optional</sup> <a name="nextRotationTimeInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.nextRotationTimeInput"></a>

```java
public java.lang.String getNextRotationTimeInput();
```

- *Type:* java.lang.String

---

##### `rotationPeriodInput`<sup>Optional</sup> <a name="rotationPeriodInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.rotationPeriodInput"></a>

```java
public java.lang.String getRotationPeriodInput();
```

- *Type:* java.lang.String

---

##### `nextRotationTime`<sup>Required</sup> <a name="nextRotationTime" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.nextRotationTime"></a>

```java
public java.lang.String getNextRotationTime();
```

- *Type:* java.lang.String

---

##### `rotationPeriod`<sup>Required</sup> <a name="rotationPeriod" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.rotationPeriod"></a>

```java
public java.lang.String getRotationPeriod();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.internalValue"></a>

```java
public GoogleAssuredWorkloadsWorkloadKmsSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings">GoogleAssuredWorkloadsWorkloadKmsSettings</a>

---


### GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference <a name="GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_assured_workloads_workload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference;

new GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.resetAssuredWorkloadsMonitoring">resetAssuredWorkloadsMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.resetDataLogsViewer">resetDataLogsViewer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.resetServiceAccessApprover">resetServiceAccessApprover</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAssuredWorkloadsMonitoring` <a name="resetAssuredWorkloadsMonitoring" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.resetAssuredWorkloadsMonitoring"></a>

```java
public void resetAssuredWorkloadsMonitoring()
```

##### `resetDataLogsViewer` <a name="resetDataLogsViewer" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.resetDataLogsViewer"></a>

```java
public void resetDataLogsViewer()
```

##### `resetServiceAccessApprover` <a name="resetServiceAccessApprover" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.resetServiceAccessApprover"></a>

```java
public void resetServiceAccessApprover()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.assuredWorkloadsMonitoringInput">assuredWorkloadsMonitoringInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.dataLogsViewerInput">dataLogsViewerInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.serviceAccessApproverInput">serviceAccessApproverInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.assuredWorkloadsMonitoring">assuredWorkloadsMonitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.dataLogsViewer">dataLogsViewer</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.serviceAccessApprover">serviceAccessApprover</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissions">GoogleAssuredWorkloadsWorkloadPartnerPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `assuredWorkloadsMonitoringInput`<sup>Optional</sup> <a name="assuredWorkloadsMonitoringInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.assuredWorkloadsMonitoringInput"></a>

```java
public java.lang.Object getAssuredWorkloadsMonitoringInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dataLogsViewerInput`<sup>Optional</sup> <a name="dataLogsViewerInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.dataLogsViewerInput"></a>

```java
public java.lang.Object getDataLogsViewerInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serviceAccessApproverInput`<sup>Optional</sup> <a name="serviceAccessApproverInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.serviceAccessApproverInput"></a>

```java
public java.lang.Object getServiceAccessApproverInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `assuredWorkloadsMonitoring`<sup>Required</sup> <a name="assuredWorkloadsMonitoring" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.assuredWorkloadsMonitoring"></a>

```java
public java.lang.Object getAssuredWorkloadsMonitoring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dataLogsViewer`<sup>Required</sup> <a name="dataLogsViewer" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.dataLogsViewer"></a>

```java
public java.lang.Object getDataLogsViewer();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serviceAccessApprover`<sup>Required</sup> <a name="serviceAccessApprover" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.serviceAccessApprover"></a>

```java
public java.lang.Object getServiceAccessApprover();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.internalValue"></a>

```java
public GoogleAssuredWorkloadsWorkloadPartnerPermissions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissions">GoogleAssuredWorkloadsWorkloadPartnerPermissions</a>

---


### GoogleAssuredWorkloadsWorkloadResourceSettingsList <a name="GoogleAssuredWorkloadsWorkloadResourceSettingsList" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_assured_workloads_workload.GoogleAssuredWorkloadsWorkloadResourceSettingsList;

new GoogleAssuredWorkloadsWorkloadResourceSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.get"></a>

```java
public GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettings">GoogleAssuredWorkloadsWorkloadResourceSettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettings">GoogleAssuredWorkloadsWorkloadResourceSettings</a>>

---


### GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference <a name="GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_assured_workloads_workload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference;

new GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.resetResourceId">resetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.resetResourceType">resetResourceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetResourceId` <a name="resetResourceId" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.resetResourceId"></a>

```java
public void resetResourceId()
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.resetResourceType"></a>

```java
public void resetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettings">GoogleAssuredWorkloadsWorkloadResourceSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettings">GoogleAssuredWorkloadsWorkloadResourceSettings</a>

---


### GoogleAssuredWorkloadsWorkloadResourcesList <a name="GoogleAssuredWorkloadsWorkloadResourcesList" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_assured_workloads_workload.GoogleAssuredWorkloadsWorkloadResourcesList;

new GoogleAssuredWorkloadsWorkloadResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.get"></a>

```java
public GoogleAssuredWorkloadsWorkloadResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleAssuredWorkloadsWorkloadResourcesOutputReference <a name="GoogleAssuredWorkloadsWorkloadResourcesOutputReference" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_assured_workloads_workload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference;

new GoogleAssuredWorkloadsWorkloadResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.property.resourceId">resourceId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResources">GoogleAssuredWorkloadsWorkloadResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.property.resourceId"></a>

```java
public java.lang.Number getResourceId();
```

- *Type:* java.lang.Number

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.property.internalValue"></a>

```java
public GoogleAssuredWorkloadsWorkloadResources getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResources">GoogleAssuredWorkloadsWorkloadResources</a>

---


### GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList <a name="GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_assured_workloads_workload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList;

new GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.get"></a>

```java
public GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference <a name="GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_assured_workloads_workload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference;

new GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.setupErrors">setupErrors</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.setupStatus">setupStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponse">GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `setupErrors`<sup>Required</sup> <a name="setupErrors" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.setupErrors"></a>

```java
public java.util.List<java.lang.String> getSetupErrors();
```

- *Type:* java.util.List<java.lang.String>

---

##### `setupStatus`<sup>Required</sup> <a name="setupStatus" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.setupStatus"></a>

```java
public java.lang.String getSetupStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.internalValue"></a>

```java
public GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponse getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponse">GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponse</a>

---


### GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference <a name="GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_assured_workloads_workload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference;

new GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts">GoogleAssuredWorkloadsWorkloadTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts">GoogleAssuredWorkloadsWorkloadTimeouts</a>

---


### GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference <a name="GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_assured_workloads_workload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference;

new GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.resetKajEnrollmentType">resetKajEnrollmentType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKajEnrollmentType` <a name="resetKajEnrollmentType" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.resetKajEnrollmentType"></a>

```java
public void resetKajEnrollmentType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.kajEnrollmentTypeInput">kajEnrollmentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.kajEnrollmentType">kajEnrollmentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptions">GoogleAssuredWorkloadsWorkloadWorkloadOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kajEnrollmentTypeInput`<sup>Optional</sup> <a name="kajEnrollmentTypeInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.kajEnrollmentTypeInput"></a>

```java
public java.lang.String getKajEnrollmentTypeInput();
```

- *Type:* java.lang.String

---

##### `kajEnrollmentType`<sup>Required</sup> <a name="kajEnrollmentType" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.kajEnrollmentType"></a>

```java
public java.lang.String getKajEnrollmentType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.internalValue"></a>

```java
public GoogleAssuredWorkloadsWorkloadWorkloadOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptions">GoogleAssuredWorkloadsWorkloadWorkloadOptions</a>

---



