# `googleComputeRegionInstanceTemplate` Submodule <a name="`googleComputeRegionInstanceTemplate` Submodule" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionInstanceTemplate <a name="GoogleComputeRegionInstanceTemplate" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template google_compute_region_instance_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplate;

GoogleComputeRegionInstanceTemplate.Builder.create(Construct scope, java.lang.String id)
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
    .disk(IResolvable)
    .disk(java.util.List<GoogleComputeRegionInstanceTemplateDisk>)
    .machineType(java.lang.String)
//  .advancedMachineFeatures(GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures)
//  .canIpForward(java.lang.Boolean)
//  .canIpForward(IResolvable)
//  .confidentialInstanceConfig(GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig)
//  .description(java.lang.String)
//  .enableDisplay(java.lang.Boolean)
//  .enableDisplay(IResolvable)
//  .guestAccelerator(IResolvable)
//  .guestAccelerator(java.util.List<GoogleComputeRegionInstanceTemplateGuestAccelerator>)
//  .id(java.lang.String)
//  .instanceDescription(java.lang.String)
//  .keyRevocationActionType(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .metadataStartupScript(java.lang.String)
//  .minCpuPlatform(java.lang.String)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .networkInterface(IResolvable)
//  .networkInterface(java.util.List<GoogleComputeRegionInstanceTemplateNetworkInterface>)
//  .networkPerformanceConfig(GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig)
//  .partnerMetadata(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .reservationAffinity(GoogleComputeRegionInstanceTemplateReservationAffinity)
//  .resourceManagerTags(java.util.Map<java.lang.String, java.lang.String>)
//  .resourcePolicies(java.util.List<java.lang.String>)
//  .scheduling(GoogleComputeRegionInstanceTemplateScheduling)
//  .serviceAccount(GoogleComputeRegionInstanceTemplateServiceAccount)
//  .shieldedInstanceConfig(GoogleComputeRegionInstanceTemplateShieldedInstanceConfig)
//  .tags(java.util.List<java.lang.String>)
//  .timeouts(GoogleComputeRegionInstanceTemplateTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.disk">disk</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk">GoogleComputeRegionInstanceTemplateDisk</a>></code> | disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.machineType">machineType</a></code> | <code>java.lang.String</code> | The machine type to create. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.advancedMachineFeatures">advancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures">GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures</a></code> | advanced_machine_features block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.canIpForward">canIpForward</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to allow sending and receiving of packets with non-matching source or destination IPs. This defaults to false. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.confidentialInstanceConfig">confidentialInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig">GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig</a></code> | confidential_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A brief description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.enableDisplay">enableDisplay</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable Virtual Displays on this instance. Note: allow_stopping_for_update must be set to true in order to update this field. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.guestAccelerator">guestAccelerator</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAccelerator">GoogleComputeRegionInstanceTemplateGuestAccelerator</a>></code> | guest_accelerator block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#id GoogleComputeRegionInstanceTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.instanceDescription">instanceDescription</a></code> | <code>java.lang.String</code> | A description of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.keyRevocationActionType">keyRevocationActionType</a></code> | <code>java.lang.String</code> | Action to be taken when a customer's encryption key is revoked. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value label pairs to assign to instances created from this template,. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Metadata key/value pairs to make available from within instances created from this template. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.metadataStartupScript">metadataStartupScript</a></code> | <code>java.lang.String</code> | An alternative to using the startup-script metadata key, mostly to match the compute_instance resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.minCpuPlatform">minCpuPlatform</a></code> | <code>java.lang.String</code> | Specifies a minimum CPU platform. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Creates a unique name beginning with the specified prefix. Conflicts with name. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.networkInterface">networkInterface</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface">GoogleComputeRegionInstanceTemplateNetworkInterface</a>></code> | network_interface block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.networkPerformanceConfig">networkPerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig">GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig</a></code> | network_performance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.partnerMetadata">partnerMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Partner Metadata Map made available within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region in which the instance template is located. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.reservationAffinity">reservationAffinity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinity">GoogleComputeRegionInstanceTemplateReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.resourceManagerTags">resourceManagerTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of resource manager tags. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.resourcePolicies">resourcePolicies</a></code> | <code>java.util.List<java.lang.String></code> | A list of self_links of resource policies to attach to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling">GoogleComputeRegionInstanceTemplateScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.serviceAccount">serviceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccount">GoogleComputeRegionInstanceTemplateServiceAccount</a></code> | service_account block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfig">GoogleComputeRegionInstanceTemplateShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Tags to attach to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeouts">GoogleComputeRegionInstanceTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.disk"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk">GoogleComputeRegionInstanceTemplateDisk</a>>

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#disk GoogleComputeRegionInstanceTemplate#disk}

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.machineType"></a>

- *Type:* java.lang.String

The machine type to create.

To create a machine with a custom type (such as extended memory), format the value like custom-VCPUS-MEM_IN_MB like custom-6-20480 for 6 vCPU and 20GB of RAM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#machine_type GoogleComputeRegionInstanceTemplate#machine_type}

---

##### `advancedMachineFeatures`<sup>Optional</sup> <a name="advancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.advancedMachineFeatures"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures">GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures</a>

advanced_machine_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#advanced_machine_features GoogleComputeRegionInstanceTemplate#advanced_machine_features}

---

##### `canIpForward`<sup>Optional</sup> <a name="canIpForward" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.canIpForward"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to allow sending and receiving of packets with non-matching source or destination IPs. This defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#can_ip_forward GoogleComputeRegionInstanceTemplate#can_ip_forward}

---

##### `confidentialInstanceConfig`<sup>Optional</sup> <a name="confidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.confidentialInstanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig">GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig</a>

confidential_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#confidential_instance_config GoogleComputeRegionInstanceTemplate#confidential_instance_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A brief description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#description GoogleComputeRegionInstanceTemplate#description}

---

##### `enableDisplay`<sup>Optional</sup> <a name="enableDisplay" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.enableDisplay"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable Virtual Displays on this instance. Note: allow_stopping_for_update must be set to true in order to update this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#enable_display GoogleComputeRegionInstanceTemplate#enable_display}

---

##### `guestAccelerator`<sup>Optional</sup> <a name="guestAccelerator" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.guestAccelerator"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAccelerator">GoogleComputeRegionInstanceTemplateGuestAccelerator</a>>

guest_accelerator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#guest_accelerator GoogleComputeRegionInstanceTemplate#guest_accelerator}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#id GoogleComputeRegionInstanceTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceDescription`<sup>Optional</sup> <a name="instanceDescription" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.instanceDescription"></a>

- *Type:* java.lang.String

A description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#instance_description GoogleComputeRegionInstanceTemplate#instance_description}

---

##### `keyRevocationActionType`<sup>Optional</sup> <a name="keyRevocationActionType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.keyRevocationActionType"></a>

- *Type:* java.lang.String

Action to be taken when a customer's encryption key is revoked.

Supports "STOP" and "NONE", with "NONE" being the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#key_revocation_action_type GoogleComputeRegionInstanceTemplate#key_revocation_action_type}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value label pairs to assign to instances created from this template,.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#labels GoogleComputeRegionInstanceTemplate#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.metadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Metadata key/value pairs to make available from within instances created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#metadata GoogleComputeRegionInstanceTemplate#metadata}

---

##### `metadataStartupScript`<sup>Optional</sup> <a name="metadataStartupScript" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.metadataStartupScript"></a>

- *Type:* java.lang.String

An alternative to using the startup-script metadata key, mostly to match the compute_instance resource.

This replaces the startup-script metadata key on the created instance and thus the two mechanisms are not allowed to be used simultaneously.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#metadata_startup_script GoogleComputeRegionInstanceTemplate#metadata_startup_script}

---

##### `minCpuPlatform`<sup>Optional</sup> <a name="minCpuPlatform" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.minCpuPlatform"></a>

- *Type:* java.lang.String

Specifies a minimum CPU platform.

Applicable values are the friendly names of CPU platforms, such as Intel Haswell or Intel Skylake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#min_cpu_platform GoogleComputeRegionInstanceTemplate#min_cpu_platform}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#name GoogleComputeRegionInstanceTemplate#name}

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.namePrefix"></a>

- *Type:* java.lang.String

Creates a unique name beginning with the specified prefix. Conflicts with name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#name_prefix GoogleComputeRegionInstanceTemplate#name_prefix}

---

##### `networkInterface`<sup>Optional</sup> <a name="networkInterface" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.networkInterface"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface">GoogleComputeRegionInstanceTemplateNetworkInterface</a>>

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#network_interface GoogleComputeRegionInstanceTemplate#network_interface}

---

##### `networkPerformanceConfig`<sup>Optional</sup> <a name="networkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.networkPerformanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig">GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig</a>

network_performance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#network_performance_config GoogleComputeRegionInstanceTemplate#network_performance_config}

---

##### `partnerMetadata`<sup>Optional</sup> <a name="partnerMetadata" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.partnerMetadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Partner Metadata Map made available within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#partner_metadata GoogleComputeRegionInstanceTemplate#partner_metadata}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#project GoogleComputeRegionInstanceTemplate#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region in which the instance template is located. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#region GoogleComputeRegionInstanceTemplate#region}

---

##### `reservationAffinity`<sup>Optional</sup> <a name="reservationAffinity" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.reservationAffinity"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinity">GoogleComputeRegionInstanceTemplateReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#reservation_affinity GoogleComputeRegionInstanceTemplate#reservation_affinity}

---

##### `resourceManagerTags`<sup>Optional</sup> <a name="resourceManagerTags" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.resourceManagerTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#resource_manager_tags GoogleComputeRegionInstanceTemplate#resource_manager_tags}

---

##### `resourcePolicies`<sup>Optional</sup> <a name="resourcePolicies" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.resourcePolicies"></a>

- *Type:* java.util.List<java.lang.String>

A list of self_links of resource policies to attach to the instance.

Currently a max of 1 resource policy is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#resource_policies GoogleComputeRegionInstanceTemplate#resource_policies}

---

##### `scheduling`<sup>Optional</sup> <a name="scheduling" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.scheduling"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling">GoogleComputeRegionInstanceTemplateScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#scheduling GoogleComputeRegionInstanceTemplate#scheduling}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.serviceAccount"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccount">GoogleComputeRegionInstanceTemplateServiceAccount</a>

service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#service_account GoogleComputeRegionInstanceTemplate#service_account}

---

##### `shieldedInstanceConfig`<sup>Optional</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.shieldedInstanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfig">GoogleComputeRegionInstanceTemplateShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#shielded_instance_config GoogleComputeRegionInstanceTemplate#shielded_instance_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Tags to attach to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#tags GoogleComputeRegionInstanceTemplate#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeouts">GoogleComputeRegionInstanceTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#timeouts GoogleComputeRegionInstanceTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putAdvancedMachineFeatures">putAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putConfidentialInstanceConfig">putConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putDisk">putDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putGuestAccelerator">putGuestAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putNetworkInterface">putNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putNetworkPerformanceConfig">putNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putReservationAffinity">putReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putScheduling">putScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putServiceAccount">putServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putShieldedInstanceConfig">putShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetAdvancedMachineFeatures">resetAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetCanIpForward">resetCanIpForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetConfidentialInstanceConfig">resetConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetEnableDisplay">resetEnableDisplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetGuestAccelerator">resetGuestAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetInstanceDescription">resetInstanceDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetKeyRevocationActionType">resetKeyRevocationActionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetMetadataStartupScript">resetMetadataStartupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetMinCpuPlatform">resetMinCpuPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetNetworkInterface">resetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetNetworkPerformanceConfig">resetNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetPartnerMetadata">resetPartnerMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetReservationAffinity">resetReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetResourceManagerTags">resetResourceManagerTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetResourcePolicies">resetResourcePolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetScheduling">resetScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetShieldedInstanceConfig">resetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdvancedMachineFeatures` <a name="putAdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putAdvancedMachineFeatures"></a>

```java
public void putAdvancedMachineFeatures(GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putAdvancedMachineFeatures.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures">GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures</a>

---

##### `putConfidentialInstanceConfig` <a name="putConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putConfidentialInstanceConfig"></a>

```java
public void putConfidentialInstanceConfig(GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putConfidentialInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig">GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig</a>

---

##### `putDisk` <a name="putDisk" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putDisk"></a>

```java
public void putDisk(IResolvable OR java.util.List<GoogleComputeRegionInstanceTemplateDisk> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putDisk.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk">GoogleComputeRegionInstanceTemplateDisk</a>>

---

##### `putGuestAccelerator` <a name="putGuestAccelerator" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putGuestAccelerator"></a>

```java
public void putGuestAccelerator(IResolvable OR java.util.List<GoogleComputeRegionInstanceTemplateGuestAccelerator> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putGuestAccelerator.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAccelerator">GoogleComputeRegionInstanceTemplateGuestAccelerator</a>>

---

##### `putNetworkInterface` <a name="putNetworkInterface" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putNetworkInterface"></a>

```java
public void putNetworkInterface(IResolvable OR java.util.List<GoogleComputeRegionInstanceTemplateNetworkInterface> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putNetworkInterface.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface">GoogleComputeRegionInstanceTemplateNetworkInterface</a>>

---

##### `putNetworkPerformanceConfig` <a name="putNetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putNetworkPerformanceConfig"></a>

```java
public void putNetworkPerformanceConfig(GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putNetworkPerformanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig">GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig</a>

---

##### `putReservationAffinity` <a name="putReservationAffinity" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putReservationAffinity"></a>

```java
public void putReservationAffinity(GoogleComputeRegionInstanceTemplateReservationAffinity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putReservationAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinity">GoogleComputeRegionInstanceTemplateReservationAffinity</a>

---

##### `putScheduling` <a name="putScheduling" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putScheduling"></a>

```java
public void putScheduling(GoogleComputeRegionInstanceTemplateScheduling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putScheduling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling">GoogleComputeRegionInstanceTemplateScheduling</a>

---

##### `putServiceAccount` <a name="putServiceAccount" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putServiceAccount"></a>

```java
public void putServiceAccount(GoogleComputeRegionInstanceTemplateServiceAccount value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putServiceAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccount">GoogleComputeRegionInstanceTemplateServiceAccount</a>

---

##### `putShieldedInstanceConfig` <a name="putShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putShieldedInstanceConfig"></a>

```java
public void putShieldedInstanceConfig(GoogleComputeRegionInstanceTemplateShieldedInstanceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfig">GoogleComputeRegionInstanceTemplateShieldedInstanceConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeRegionInstanceTemplateTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeouts">GoogleComputeRegionInstanceTemplateTimeouts</a>

---

##### `resetAdvancedMachineFeatures` <a name="resetAdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetAdvancedMachineFeatures"></a>

```java
public void resetAdvancedMachineFeatures()
```

##### `resetCanIpForward` <a name="resetCanIpForward" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetCanIpForward"></a>

```java
public void resetCanIpForward()
```

##### `resetConfidentialInstanceConfig` <a name="resetConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetConfidentialInstanceConfig"></a>

```java
public void resetConfidentialInstanceConfig()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnableDisplay` <a name="resetEnableDisplay" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetEnableDisplay"></a>

```java
public void resetEnableDisplay()
```

##### `resetGuestAccelerator` <a name="resetGuestAccelerator" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetGuestAccelerator"></a>

```java
public void resetGuestAccelerator()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceDescription` <a name="resetInstanceDescription" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetInstanceDescription"></a>

```java
public void resetInstanceDescription()
```

##### `resetKeyRevocationActionType` <a name="resetKeyRevocationActionType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetKeyRevocationActionType"></a>

```java
public void resetKeyRevocationActionType()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetMetadataStartupScript` <a name="resetMetadataStartupScript" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetMetadataStartupScript"></a>

```java
public void resetMetadataStartupScript()
```

##### `resetMinCpuPlatform` <a name="resetMinCpuPlatform" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetMinCpuPlatform"></a>

```java
public void resetMinCpuPlatform()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetName"></a>

```java
public void resetName()
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetNamePrefix"></a>

```java
public void resetNamePrefix()
```

##### `resetNetworkInterface` <a name="resetNetworkInterface" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetNetworkInterface"></a>

```java
public void resetNetworkInterface()
```

##### `resetNetworkPerformanceConfig` <a name="resetNetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetNetworkPerformanceConfig"></a>

```java
public void resetNetworkPerformanceConfig()
```

##### `resetPartnerMetadata` <a name="resetPartnerMetadata" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetPartnerMetadata"></a>

```java
public void resetPartnerMetadata()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetReservationAffinity` <a name="resetReservationAffinity" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetReservationAffinity"></a>

```java
public void resetReservationAffinity()
```

##### `resetResourceManagerTags` <a name="resetResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetResourceManagerTags"></a>

```java
public void resetResourceManagerTags()
```

##### `resetResourcePolicies` <a name="resetResourcePolicies" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetResourcePolicies"></a>

```java
public void resetResourcePolicies()
```

##### `resetScheduling` <a name="resetScheduling" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetScheduling"></a>

```java
public void resetScheduling()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```

##### `resetShieldedInstanceConfig` <a name="resetShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetShieldedInstanceConfig"></a>

```java
public void resetShieldedInstanceConfig()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeRegionInstanceTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplate;

GoogleComputeRegionInstanceTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplate;

GoogleComputeRegionInstanceTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplate;

GoogleComputeRegionInstanceTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplate;

GoogleComputeRegionInstanceTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeRegionInstanceTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleComputeRegionInstanceTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeRegionInstanceTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeRegionInstanceTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionInstanceTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.advancedMachineFeatures">advancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference">GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.confidentialInstanceConfig">confidentialInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference">GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.disk">disk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList">GoogleComputeRegionInstanceTemplateDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.guestAccelerator">guestAccelerator</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList">GoogleComputeRegionInstanceTemplateGuestAcceleratorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.metadataFingerprint">metadataFingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.networkInterface">networkInterface</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList">GoogleComputeRegionInstanceTemplateNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.networkPerformanceConfig">networkPerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference">GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.reservationAffinity">reservationAffinity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference">GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference">GoogleComputeRegionInstanceTemplateSchedulingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.serviceAccount">serviceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference">GoogleComputeRegionInstanceTemplateServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference">GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.tagsFingerprint">tagsFingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference">GoogleComputeRegionInstanceTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.advancedMachineFeaturesInput">advancedMachineFeaturesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures">GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.canIpForwardInput">canIpForwardInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.confidentialInstanceConfigInput">confidentialInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig">GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.diskInput">diskInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk">GoogleComputeRegionInstanceTemplateDisk</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.enableDisplayInput">enableDisplayInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.guestAcceleratorInput">guestAcceleratorInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAccelerator">GoogleComputeRegionInstanceTemplateGuestAccelerator</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.instanceDescriptionInput">instanceDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.keyRevocationActionTypeInput">keyRevocationActionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.machineTypeInput">machineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.metadataStartupScriptInput">metadataStartupScriptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.minCpuPlatformInput">minCpuPlatformInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.namePrefixInput">namePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.networkInterfaceInput">networkInterfaceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface">GoogleComputeRegionInstanceTemplateNetworkInterface</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.networkPerformanceConfigInput">networkPerformanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig">GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.partnerMetadataInput">partnerMetadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.reservationAffinityInput">reservationAffinityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinity">GoogleComputeRegionInstanceTemplateReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.resourceManagerTagsInput">resourceManagerTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.resourcePoliciesInput">resourcePoliciesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.schedulingInput">schedulingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling">GoogleComputeRegionInstanceTemplateScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.serviceAccountInput">serviceAccountInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccount">GoogleComputeRegionInstanceTemplateServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.shieldedInstanceConfigInput">shieldedInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfig">GoogleComputeRegionInstanceTemplateShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeouts">GoogleComputeRegionInstanceTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.canIpForward">canIpForward</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.enableDisplay">enableDisplay</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.instanceDescription">instanceDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.keyRevocationActionType">keyRevocationActionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.metadataStartupScript">metadataStartupScript</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.minCpuPlatform">minCpuPlatform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.partnerMetadata">partnerMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.resourceManagerTags">resourceManagerTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.resourcePolicies">resourcePolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `advancedMachineFeatures`<sup>Required</sup> <a name="advancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.advancedMachineFeatures"></a>

```java
public GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference getAdvancedMachineFeatures();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference">GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference</a>

---

##### `confidentialInstanceConfig`<sup>Required</sup> <a name="confidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.confidentialInstanceConfig"></a>

```java
public GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference getConfidentialInstanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference">GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.disk"></a>

```java
public GoogleComputeRegionInstanceTemplateDiskList getDisk();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList">GoogleComputeRegionInstanceTemplateDiskList</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `guestAccelerator`<sup>Required</sup> <a name="guestAccelerator" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.guestAccelerator"></a>

```java
public GoogleComputeRegionInstanceTemplateGuestAcceleratorList getGuestAccelerator();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList">GoogleComputeRegionInstanceTemplateGuestAcceleratorList</a>

---

##### `metadataFingerprint`<sup>Required</sup> <a name="metadataFingerprint" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.metadataFingerprint"></a>

```java
public java.lang.String getMetadataFingerprint();
```

- *Type:* java.lang.String

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.networkInterface"></a>

```java
public GoogleComputeRegionInstanceTemplateNetworkInterfaceList getNetworkInterface();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList">GoogleComputeRegionInstanceTemplateNetworkInterfaceList</a>

---

##### `networkPerformanceConfig`<sup>Required</sup> <a name="networkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.networkPerformanceConfig"></a>

```java
public GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference getNetworkPerformanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference">GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference</a>

---

##### `reservationAffinity`<sup>Required</sup> <a name="reservationAffinity" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.reservationAffinity"></a>

```java
public GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference getReservationAffinity();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference">GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference</a>

---

##### `scheduling`<sup>Required</sup> <a name="scheduling" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.scheduling"></a>

```java
public GoogleComputeRegionInstanceTemplateSchedulingOutputReference getScheduling();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference">GoogleComputeRegionInstanceTemplateSchedulingOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.serviceAccount"></a>

```java
public GoogleComputeRegionInstanceTemplateServiceAccountOutputReference getServiceAccount();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference">GoogleComputeRegionInstanceTemplateServiceAccountOutputReference</a>

---

##### `shieldedInstanceConfig`<sup>Required</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.shieldedInstanceConfig"></a>

```java
public GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference getShieldedInstanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference">GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference</a>

---

##### `tagsFingerprint`<sup>Required</sup> <a name="tagsFingerprint" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.tagsFingerprint"></a>

```java
public java.lang.String getTagsFingerprint();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.timeouts"></a>

```java
public GoogleComputeRegionInstanceTemplateTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference">GoogleComputeRegionInstanceTemplateTimeoutsOutputReference</a>

---

##### `advancedMachineFeaturesInput`<sup>Optional</sup> <a name="advancedMachineFeaturesInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.advancedMachineFeaturesInput"></a>

```java
public GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures getAdvancedMachineFeaturesInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures">GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures</a>

---

##### `canIpForwardInput`<sup>Optional</sup> <a name="canIpForwardInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.canIpForwardInput"></a>

```java
public java.lang.Object getCanIpForwardInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `confidentialInstanceConfigInput`<sup>Optional</sup> <a name="confidentialInstanceConfigInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.confidentialInstanceConfigInput"></a>

```java
public GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig getConfidentialInstanceConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig">GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `diskInput`<sup>Optional</sup> <a name="diskInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.diskInput"></a>

```java
public java.lang.Object getDiskInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk">GoogleComputeRegionInstanceTemplateDisk</a>>

---

##### `enableDisplayInput`<sup>Optional</sup> <a name="enableDisplayInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.enableDisplayInput"></a>

```java
public java.lang.Object getEnableDisplayInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `guestAcceleratorInput`<sup>Optional</sup> <a name="guestAcceleratorInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.guestAcceleratorInput"></a>

```java
public java.lang.Object getGuestAcceleratorInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAccelerator">GoogleComputeRegionInstanceTemplateGuestAccelerator</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceDescriptionInput`<sup>Optional</sup> <a name="instanceDescriptionInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.instanceDescriptionInput"></a>

```java
public java.lang.String getInstanceDescriptionInput();
```

- *Type:* java.lang.String

---

##### `keyRevocationActionTypeInput`<sup>Optional</sup> <a name="keyRevocationActionTypeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.keyRevocationActionTypeInput"></a>

```java
public java.lang.String getKeyRevocationActionTypeInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.machineTypeInput"></a>

```java
public java.lang.String getMachineTypeInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `metadataStartupScriptInput`<sup>Optional</sup> <a name="metadataStartupScriptInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.metadataStartupScriptInput"></a>

```java
public java.lang.String getMetadataStartupScriptInput();
```

- *Type:* java.lang.String

---

##### `minCpuPlatformInput`<sup>Optional</sup> <a name="minCpuPlatformInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.minCpuPlatformInput"></a>

```java
public java.lang.String getMinCpuPlatformInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.namePrefixInput"></a>

```java
public java.lang.String getNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `networkInterfaceInput`<sup>Optional</sup> <a name="networkInterfaceInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.networkInterfaceInput"></a>

```java
public java.lang.Object getNetworkInterfaceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface">GoogleComputeRegionInstanceTemplateNetworkInterface</a>>

---

##### `networkPerformanceConfigInput`<sup>Optional</sup> <a name="networkPerformanceConfigInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.networkPerformanceConfigInput"></a>

```java
public GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig getNetworkPerformanceConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig">GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig</a>

---

##### `partnerMetadataInput`<sup>Optional</sup> <a name="partnerMetadataInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.partnerMetadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPartnerMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `reservationAffinityInput`<sup>Optional</sup> <a name="reservationAffinityInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.reservationAffinityInput"></a>

```java
public GoogleComputeRegionInstanceTemplateReservationAffinity getReservationAffinityInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinity">GoogleComputeRegionInstanceTemplateReservationAffinity</a>

---

##### `resourceManagerTagsInput`<sup>Optional</sup> <a name="resourceManagerTagsInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.resourceManagerTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `resourcePoliciesInput`<sup>Optional</sup> <a name="resourcePoliciesInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.resourcePoliciesInput"></a>

```java
public java.util.List<java.lang.String> getResourcePoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `schedulingInput`<sup>Optional</sup> <a name="schedulingInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.schedulingInput"></a>

```java
public GoogleComputeRegionInstanceTemplateScheduling getSchedulingInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling">GoogleComputeRegionInstanceTemplateScheduling</a>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.serviceAccountInput"></a>

```java
public GoogleComputeRegionInstanceTemplateServiceAccount getServiceAccountInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccount">GoogleComputeRegionInstanceTemplateServiceAccount</a>

---

##### `shieldedInstanceConfigInput`<sup>Optional</sup> <a name="shieldedInstanceConfigInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.shieldedInstanceConfigInput"></a>

```java
public GoogleComputeRegionInstanceTemplateShieldedInstanceConfig getShieldedInstanceConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfig">GoogleComputeRegionInstanceTemplateShieldedInstanceConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeouts">GoogleComputeRegionInstanceTemplateTimeouts</a>

---

##### `canIpForward`<sup>Required</sup> <a name="canIpForward" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.canIpForward"></a>

```java
public java.lang.Object getCanIpForward();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enableDisplay`<sup>Required</sup> <a name="enableDisplay" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.enableDisplay"></a>

```java
public java.lang.Object getEnableDisplay();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceDescription`<sup>Required</sup> <a name="instanceDescription" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.instanceDescription"></a>

```java
public java.lang.String getInstanceDescription();
```

- *Type:* java.lang.String

---

##### `keyRevocationActionType`<sup>Required</sup> <a name="keyRevocationActionType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.keyRevocationActionType"></a>

```java
public java.lang.String getKeyRevocationActionType();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `metadataStartupScript`<sup>Required</sup> <a name="metadataStartupScript" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.metadataStartupScript"></a>

```java
public java.lang.String getMetadataStartupScript();
```

- *Type:* java.lang.String

---

##### `minCpuPlatform`<sup>Required</sup> <a name="minCpuPlatform" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.minCpuPlatform"></a>

```java
public java.lang.String getMinCpuPlatform();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

---

##### `partnerMetadata`<sup>Required</sup> <a name="partnerMetadata" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.partnerMetadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPartnerMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.resourceManagerTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `resourcePolicies`<sup>Required</sup> <a name="resourcePolicies" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.resourcePolicies"></a>

```java
public java.util.List<java.lang.String> getResourcePolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures <a name="GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures;

GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures.builder()
//  .enableNestedVirtualization(java.lang.Boolean)
//  .enableNestedVirtualization(IResolvable)
//  .enableUefiNetworking(java.lang.Boolean)
//  .enableUefiNetworking(IResolvable)
//  .performanceMonitoringUnit(java.lang.String)
//  .threadsPerCore(java.lang.Number)
//  .turboMode(java.lang.String)
//  .visibleCoreCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures.property.enableNestedVirtualization">enableNestedVirtualization</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to enable nested virtualization or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures.property.enableUefiNetworking">enableUefiNetworking</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to enable UEFI networking or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures.property.performanceMonitoringUnit">performanceMonitoringUnit</a></code> | <code>java.lang.String</code> | The PMU is a hardware component within the CPU core that monitors how the processor runs code. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures.property.threadsPerCore">threadsPerCore</a></code> | <code>java.lang.Number</code> | The number of threads per physical core. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures.property.turboMode">turboMode</a></code> | <code>java.lang.String</code> | Turbo frequency mode to use for the instance. Currently supported modes is "ALL_CORE_MAX". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures.property.visibleCoreCount">visibleCoreCount</a></code> | <code>java.lang.Number</code> | The number of physical cores to expose to an instance. |

---

##### `enableNestedVirtualization`<sup>Optional</sup> <a name="enableNestedVirtualization" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures.property.enableNestedVirtualization"></a>

```java
public java.lang.Object getEnableNestedVirtualization();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to enable nested virtualization or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#enable_nested_virtualization GoogleComputeRegionInstanceTemplate#enable_nested_virtualization}

---

##### `enableUefiNetworking`<sup>Optional</sup> <a name="enableUefiNetworking" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures.property.enableUefiNetworking"></a>

```java
public java.lang.Object getEnableUefiNetworking();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to enable UEFI networking or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#enable_uefi_networking GoogleComputeRegionInstanceTemplate#enable_uefi_networking}

---

##### `performanceMonitoringUnit`<sup>Optional</sup> <a name="performanceMonitoringUnit" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures.property.performanceMonitoringUnit"></a>

```java
public java.lang.String getPerformanceMonitoringUnit();
```

- *Type:* java.lang.String

The PMU is a hardware component within the CPU core that monitors how the processor runs code.

Valid values for the level of PMU are "STANDARD", "ENHANCED", and "ARCHITECTURAL".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#performance_monitoring_unit GoogleComputeRegionInstanceTemplate#performance_monitoring_unit}

---

##### `threadsPerCore`<sup>Optional</sup> <a name="threadsPerCore" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures.property.threadsPerCore"></a>

```java
public java.lang.Number getThreadsPerCore();
```

- *Type:* java.lang.Number

The number of threads per physical core.

To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#threads_per_core GoogleComputeRegionInstanceTemplate#threads_per_core}

---

##### `turboMode`<sup>Optional</sup> <a name="turboMode" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures.property.turboMode"></a>

```java
public java.lang.String getTurboMode();
```

- *Type:* java.lang.String

Turbo frequency mode to use for the instance. Currently supported modes is "ALL_CORE_MAX".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#turbo_mode GoogleComputeRegionInstanceTemplate#turbo_mode}

---

##### `visibleCoreCount`<sup>Optional</sup> <a name="visibleCoreCount" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures.property.visibleCoreCount"></a>

```java
public java.lang.Number getVisibleCoreCount();
```

- *Type:* java.lang.Number

The number of physical cores to expose to an instance.

Multiply by the number of threads per core to compute the total number of virtual CPUs to expose to the instance. If unset, the number of cores is inferred from the instance's nominal CPU count and the underlying platform's SMT width.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#visible_core_count GoogleComputeRegionInstanceTemplate#visible_core_count}

---

### GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig <a name="GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig;

GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig.builder()
//  .confidentialInstanceType(java.lang.String)
//  .enableConfidentialCompute(java.lang.Boolean)
//  .enableConfidentialCompute(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig.property.confidentialInstanceType">confidentialInstanceType</a></code> | <code>java.lang.String</code> | The confidential computing technology the instance uses. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig.property.enableConfidentialCompute">enableConfidentialCompute</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defines whether the instance should have confidential compute enabled. Field will be deprecated in a future release. |

---

##### `confidentialInstanceType`<sup>Optional</sup> <a name="confidentialInstanceType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig.property.confidentialInstanceType"></a>

```java
public java.lang.String getConfidentialInstanceType();
```

- *Type:* java.lang.String

The confidential computing technology the instance uses.

SEV is an AMD feature. TDX is an Intel feature. One of the following
values is required: SEV, SEV_SNP, TDX. If SEV_SNP, min_cpu_platform =
"AMD Milan" is currently required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#confidential_instance_type GoogleComputeRegionInstanceTemplate#confidential_instance_type}

---

##### `enableConfidentialCompute`<sup>Optional</sup> <a name="enableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig.property.enableConfidentialCompute"></a>

```java
public java.lang.Object getEnableConfidentialCompute();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defines whether the instance should have confidential compute enabled. Field will be deprecated in a future release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#enable_confidential_compute GoogleComputeRegionInstanceTemplate#enable_confidential_compute}

---

### GoogleComputeRegionInstanceTemplateConfig <a name="GoogleComputeRegionInstanceTemplateConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateConfig;

GoogleComputeRegionInstanceTemplateConfig.builder()
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
    .disk(IResolvable)
    .disk(java.util.List<GoogleComputeRegionInstanceTemplateDisk>)
    .machineType(java.lang.String)
//  .advancedMachineFeatures(GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures)
//  .canIpForward(java.lang.Boolean)
//  .canIpForward(IResolvable)
//  .confidentialInstanceConfig(GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig)
//  .description(java.lang.String)
//  .enableDisplay(java.lang.Boolean)
//  .enableDisplay(IResolvable)
//  .guestAccelerator(IResolvable)
//  .guestAccelerator(java.util.List<GoogleComputeRegionInstanceTemplateGuestAccelerator>)
//  .id(java.lang.String)
//  .instanceDescription(java.lang.String)
//  .keyRevocationActionType(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .metadataStartupScript(java.lang.String)
//  .minCpuPlatform(java.lang.String)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .networkInterface(IResolvable)
//  .networkInterface(java.util.List<GoogleComputeRegionInstanceTemplateNetworkInterface>)
//  .networkPerformanceConfig(GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig)
//  .partnerMetadata(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .reservationAffinity(GoogleComputeRegionInstanceTemplateReservationAffinity)
//  .resourceManagerTags(java.util.Map<java.lang.String, java.lang.String>)
//  .resourcePolicies(java.util.List<java.lang.String>)
//  .scheduling(GoogleComputeRegionInstanceTemplateScheduling)
//  .serviceAccount(GoogleComputeRegionInstanceTemplateServiceAccount)
//  .shieldedInstanceConfig(GoogleComputeRegionInstanceTemplateShieldedInstanceConfig)
//  .tags(java.util.List<java.lang.String>)
//  .timeouts(GoogleComputeRegionInstanceTemplateTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.disk">disk</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk">GoogleComputeRegionInstanceTemplateDisk</a>></code> | disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.machineType">machineType</a></code> | <code>java.lang.String</code> | The machine type to create. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.advancedMachineFeatures">advancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures">GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures</a></code> | advanced_machine_features block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.canIpForward">canIpForward</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to allow sending and receiving of packets with non-matching source or destination IPs. This defaults to false. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.confidentialInstanceConfig">confidentialInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig">GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig</a></code> | confidential_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.description">description</a></code> | <code>java.lang.String</code> | A brief description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.enableDisplay">enableDisplay</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable Virtual Displays on this instance. Note: allow_stopping_for_update must be set to true in order to update this field. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.guestAccelerator">guestAccelerator</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAccelerator">GoogleComputeRegionInstanceTemplateGuestAccelerator</a>></code> | guest_accelerator block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#id GoogleComputeRegionInstanceTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.instanceDescription">instanceDescription</a></code> | <code>java.lang.String</code> | A description of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.keyRevocationActionType">keyRevocationActionType</a></code> | <code>java.lang.String</code> | Action to be taken when a customer's encryption key is revoked. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value label pairs to assign to instances created from this template,. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Metadata key/value pairs to make available from within instances created from this template. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.metadataStartupScript">metadataStartupScript</a></code> | <code>java.lang.String</code> | An alternative to using the startup-script metadata key, mostly to match the compute_instance resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.minCpuPlatform">minCpuPlatform</a></code> | <code>java.lang.String</code> | Specifies a minimum CPU platform. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Creates a unique name beginning with the specified prefix. Conflicts with name. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.networkInterface">networkInterface</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface">GoogleComputeRegionInstanceTemplateNetworkInterface</a>></code> | network_interface block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.networkPerformanceConfig">networkPerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig">GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig</a></code> | network_performance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.partnerMetadata">partnerMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Partner Metadata Map made available within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region in which the instance template is located. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.reservationAffinity">reservationAffinity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinity">GoogleComputeRegionInstanceTemplateReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.resourceManagerTags">resourceManagerTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of resource manager tags. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.resourcePolicies">resourcePolicies</a></code> | <code>java.util.List<java.lang.String></code> | A list of self_links of resource policies to attach to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling">GoogleComputeRegionInstanceTemplateScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.serviceAccount">serviceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccount">GoogleComputeRegionInstanceTemplateServiceAccount</a></code> | service_account block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfig">GoogleComputeRegionInstanceTemplateShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Tags to attach to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeouts">GoogleComputeRegionInstanceTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.disk"></a>

```java
public java.lang.Object getDisk();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk">GoogleComputeRegionInstanceTemplateDisk</a>>

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#disk GoogleComputeRegionInstanceTemplate#disk}

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

The machine type to create.

To create a machine with a custom type (such as extended memory), format the value like custom-VCPUS-MEM_IN_MB like custom-6-20480 for 6 vCPU and 20GB of RAM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#machine_type GoogleComputeRegionInstanceTemplate#machine_type}

---

##### `advancedMachineFeatures`<sup>Optional</sup> <a name="advancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.advancedMachineFeatures"></a>

```java
public GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures getAdvancedMachineFeatures();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures">GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures</a>

advanced_machine_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#advanced_machine_features GoogleComputeRegionInstanceTemplate#advanced_machine_features}

---

##### `canIpForward`<sup>Optional</sup> <a name="canIpForward" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.canIpForward"></a>

```java
public java.lang.Object getCanIpForward();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to allow sending and receiving of packets with non-matching source or destination IPs. This defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#can_ip_forward GoogleComputeRegionInstanceTemplate#can_ip_forward}

---

##### `confidentialInstanceConfig`<sup>Optional</sup> <a name="confidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.confidentialInstanceConfig"></a>

```java
public GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig getConfidentialInstanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig">GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig</a>

confidential_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#confidential_instance_config GoogleComputeRegionInstanceTemplate#confidential_instance_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A brief description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#description GoogleComputeRegionInstanceTemplate#description}

---

##### `enableDisplay`<sup>Optional</sup> <a name="enableDisplay" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.enableDisplay"></a>

```java
public java.lang.Object getEnableDisplay();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable Virtual Displays on this instance. Note: allow_stopping_for_update must be set to true in order to update this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#enable_display GoogleComputeRegionInstanceTemplate#enable_display}

---

##### `guestAccelerator`<sup>Optional</sup> <a name="guestAccelerator" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.guestAccelerator"></a>

```java
public java.lang.Object getGuestAccelerator();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAccelerator">GoogleComputeRegionInstanceTemplateGuestAccelerator</a>>

guest_accelerator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#guest_accelerator GoogleComputeRegionInstanceTemplate#guest_accelerator}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#id GoogleComputeRegionInstanceTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceDescription`<sup>Optional</sup> <a name="instanceDescription" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.instanceDescription"></a>

```java
public java.lang.String getInstanceDescription();
```

- *Type:* java.lang.String

A description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#instance_description GoogleComputeRegionInstanceTemplate#instance_description}

---

##### `keyRevocationActionType`<sup>Optional</sup> <a name="keyRevocationActionType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.keyRevocationActionType"></a>

```java
public java.lang.String getKeyRevocationActionType();
```

- *Type:* java.lang.String

Action to be taken when a customer's encryption key is revoked.

Supports "STOP" and "NONE", with "NONE" being the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#key_revocation_action_type GoogleComputeRegionInstanceTemplate#key_revocation_action_type}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value label pairs to assign to instances created from this template,.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#labels GoogleComputeRegionInstanceTemplate#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Metadata key/value pairs to make available from within instances created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#metadata GoogleComputeRegionInstanceTemplate#metadata}

---

##### `metadataStartupScript`<sup>Optional</sup> <a name="metadataStartupScript" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.metadataStartupScript"></a>

```java
public java.lang.String getMetadataStartupScript();
```

- *Type:* java.lang.String

An alternative to using the startup-script metadata key, mostly to match the compute_instance resource.

This replaces the startup-script metadata key on the created instance and thus the two mechanisms are not allowed to be used simultaneously.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#metadata_startup_script GoogleComputeRegionInstanceTemplate#metadata_startup_script}

---

##### `minCpuPlatform`<sup>Optional</sup> <a name="minCpuPlatform" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.minCpuPlatform"></a>

```java
public java.lang.String getMinCpuPlatform();
```

- *Type:* java.lang.String

Specifies a minimum CPU platform.

Applicable values are the friendly names of CPU platforms, such as Intel Haswell or Intel Skylake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#min_cpu_platform GoogleComputeRegionInstanceTemplate#min_cpu_platform}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#name GoogleComputeRegionInstanceTemplate#name}

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

Creates a unique name beginning with the specified prefix. Conflicts with name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#name_prefix GoogleComputeRegionInstanceTemplate#name_prefix}

---

##### `networkInterface`<sup>Optional</sup> <a name="networkInterface" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.networkInterface"></a>

```java
public java.lang.Object getNetworkInterface();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface">GoogleComputeRegionInstanceTemplateNetworkInterface</a>>

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#network_interface GoogleComputeRegionInstanceTemplate#network_interface}

---

##### `networkPerformanceConfig`<sup>Optional</sup> <a name="networkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.networkPerformanceConfig"></a>

```java
public GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig getNetworkPerformanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig">GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig</a>

network_performance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#network_performance_config GoogleComputeRegionInstanceTemplate#network_performance_config}

---

##### `partnerMetadata`<sup>Optional</sup> <a name="partnerMetadata" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.partnerMetadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPartnerMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Partner Metadata Map made available within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#partner_metadata GoogleComputeRegionInstanceTemplate#partner_metadata}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#project GoogleComputeRegionInstanceTemplate#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region in which the instance template is located. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#region GoogleComputeRegionInstanceTemplate#region}

---

##### `reservationAffinity`<sup>Optional</sup> <a name="reservationAffinity" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.reservationAffinity"></a>

```java
public GoogleComputeRegionInstanceTemplateReservationAffinity getReservationAffinity();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinity">GoogleComputeRegionInstanceTemplateReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#reservation_affinity GoogleComputeRegionInstanceTemplate#reservation_affinity}

---

##### `resourceManagerTags`<sup>Optional</sup> <a name="resourceManagerTags" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.resourceManagerTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#resource_manager_tags GoogleComputeRegionInstanceTemplate#resource_manager_tags}

---

##### `resourcePolicies`<sup>Optional</sup> <a name="resourcePolicies" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.resourcePolicies"></a>

```java
public java.util.List<java.lang.String> getResourcePolicies();
```

- *Type:* java.util.List<java.lang.String>

A list of self_links of resource policies to attach to the instance.

Currently a max of 1 resource policy is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#resource_policies GoogleComputeRegionInstanceTemplate#resource_policies}

---

##### `scheduling`<sup>Optional</sup> <a name="scheduling" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.scheduling"></a>

```java
public GoogleComputeRegionInstanceTemplateScheduling getScheduling();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling">GoogleComputeRegionInstanceTemplateScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#scheduling GoogleComputeRegionInstanceTemplate#scheduling}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.serviceAccount"></a>

```java
public GoogleComputeRegionInstanceTemplateServiceAccount getServiceAccount();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccount">GoogleComputeRegionInstanceTemplateServiceAccount</a>

service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#service_account GoogleComputeRegionInstanceTemplate#service_account}

---

##### `shieldedInstanceConfig`<sup>Optional</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.shieldedInstanceConfig"></a>

```java
public GoogleComputeRegionInstanceTemplateShieldedInstanceConfig getShieldedInstanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfig">GoogleComputeRegionInstanceTemplateShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#shielded_instance_config GoogleComputeRegionInstanceTemplate#shielded_instance_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Tags to attach to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#tags GoogleComputeRegionInstanceTemplate#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.timeouts"></a>

```java
public GoogleComputeRegionInstanceTemplateTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeouts">GoogleComputeRegionInstanceTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#timeouts GoogleComputeRegionInstanceTemplate#timeouts}

---

### GoogleComputeRegionInstanceTemplateDisk <a name="GoogleComputeRegionInstanceTemplateDisk" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateDisk;

GoogleComputeRegionInstanceTemplateDisk.builder()
//  .autoDelete(java.lang.Boolean)
//  .autoDelete(IResolvable)
//  .boot(java.lang.Boolean)
//  .boot(IResolvable)
//  .deviceName(java.lang.String)
//  .diskEncryptionKey(GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey)
//  .diskName(java.lang.String)
//  .diskSizeGb(java.lang.Number)
//  .diskType(java.lang.String)
//  .interface(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .mode(java.lang.String)
//  .provisionedIops(java.lang.Number)
//  .provisionedThroughput(java.lang.Number)
//  .resourceManagerTags(java.util.Map<java.lang.String, java.lang.String>)
//  .resourcePolicies(java.util.List<java.lang.String>)
//  .source(java.lang.String)
//  .sourceImage(java.lang.String)
//  .sourceImageEncryptionKey(GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey)
//  .sourceSnapshot(java.lang.String)
//  .sourceSnapshotEncryptionKey(GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.autoDelete">autoDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not the disk should be auto-deleted. This defaults to true. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.boot">boot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates that this is a boot disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.diskEncryptionKey">diskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey">GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey</a></code> | disk_encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.diskName">diskName</a></code> | <code>java.lang.String</code> | Name of the disk. When not provided, this defaults to the name of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | The size of the image in gigabytes. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.diskType">diskType</a></code> | <code>java.lang.String</code> | The Google Compute Engine disk type. Such as "pd-ssd", "local-ssd", "pd-balanced" or "pd-standard". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.interface">interface</a></code> | <code>java.lang.String</code> | Specifies the disk interface to use for attaching this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value label pairs to assign to disks,. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.mode">mode</a></code> | <code>java.lang.String</code> | The mode in which to attach this disk, either READ_WRITE or READ_ONLY. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.provisionedIops">provisionedIops</a></code> | <code>java.lang.Number</code> | Indicates how many IOPS to provision for the disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.provisionedThroughput">provisionedThroughput</a></code> | <code>java.lang.Number</code> | Indicates how much throughput to provision for the disk, in MB/s. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.resourceManagerTags">resourceManagerTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of resource manager tags. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.resourcePolicies">resourcePolicies</a></code> | <code>java.util.List<java.lang.String></code> | A list (short name or id) of resource policies to attach to this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.source">source</a></code> | <code>java.lang.String</code> | The name (not self_link) of the disk (such as those managed by google_compute_disk) to attach. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.sourceImage">sourceImage</a></code> | <code>java.lang.String</code> | The image from which to initialize this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.sourceImageEncryptionKey">sourceImageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey">GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey</a></code> | source_image_encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.sourceSnapshot">sourceSnapshot</a></code> | <code>java.lang.String</code> | The source snapshot to create this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.sourceSnapshotEncryptionKey">sourceSnapshotEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey">GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey</a></code> | source_snapshot_encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.type">type</a></code> | <code>java.lang.String</code> | The type of Google Compute Engine disk, can be either "SCRATCH" or "PERSISTENT". |

---

##### `autoDelete`<sup>Optional</sup> <a name="autoDelete" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.autoDelete"></a>

```java
public java.lang.Object getAutoDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not the disk should be auto-deleted. This defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#auto_delete GoogleComputeRegionInstanceTemplate#auto_delete}

---

##### `boot`<sup>Optional</sup> <a name="boot" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.boot"></a>

```java
public java.lang.Object getBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates that this is a boot disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#boot GoogleComputeRegionInstanceTemplate#boot}

---

##### `deviceName`<sup>Optional</sup> <a name="deviceName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance.

If not specified, the server chooses a default device name to apply to this disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#device_name GoogleComputeRegionInstanceTemplate#device_name}

---

##### `diskEncryptionKey`<sup>Optional</sup> <a name="diskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.diskEncryptionKey"></a>

```java
public GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey getDiskEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey">GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey</a>

disk_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#disk_encryption_key GoogleComputeRegionInstanceTemplate#disk_encryption_key}

---

##### `diskName`<sup>Optional</sup> <a name="diskName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.diskName"></a>

```java
public java.lang.String getDiskName();
```

- *Type:* java.lang.String

Name of the disk. When not provided, this defaults to the name of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#disk_name GoogleComputeRegionInstanceTemplate#disk_name}

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

The size of the image in gigabytes.

If not specified, it will inherit the size of its base image. For SCRATCH disks, the size must be one of 375 or 3000 GB, with a default of 375 GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#disk_size_gb GoogleComputeRegionInstanceTemplate#disk_size_gb}

---

##### `diskType`<sup>Optional</sup> <a name="diskType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.diskType"></a>

```java
public java.lang.String getDiskType();
```

- *Type:* java.lang.String

The Google Compute Engine disk type. Such as "pd-ssd", "local-ssd", "pd-balanced" or "pd-standard".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#disk_type GoogleComputeRegionInstanceTemplate#disk_type}

---

##### `interface`<sup>Optional</sup> <a name="interface" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.interface"></a>

```java
public java.lang.String getInterface();
```

- *Type:* java.lang.String

Specifies the disk interface to use for attaching this disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#interface GoogleComputeRegionInstanceTemplate#interface}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value label pairs to assign to disks,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#labels GoogleComputeRegionInstanceTemplate#labels}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

The mode in which to attach this disk, either READ_WRITE or READ_ONLY.

If you are attaching or creating a boot disk, this must read-write mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#mode GoogleComputeRegionInstanceTemplate#mode}

---

##### `provisionedIops`<sup>Optional</sup> <a name="provisionedIops" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.provisionedIops"></a>

```java
public java.lang.Number getProvisionedIops();
```

- *Type:* java.lang.Number

Indicates how many IOPS to provision for the disk.

This sets the number of I/O operations per second that the disk can handle. For more details, see the [Extreme persistent disk documentation](https://cloud.google.com/compute/docs/disks/extreme-persistent-disk) or the [Hyperdisk documentation](https://cloud.google.com/compute/docs/disks/hyperdisks) depending on the selected disk_type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#provisioned_iops GoogleComputeRegionInstanceTemplate#provisioned_iops}

---

##### `provisionedThroughput`<sup>Optional</sup> <a name="provisionedThroughput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.provisionedThroughput"></a>

```java
public java.lang.Number getProvisionedThroughput();
```

- *Type:* java.lang.Number

Indicates how much throughput to provision for the disk, in MB/s.

This sets the amount of data that can be read or written from the disk per second. Values must greater than or equal to 1. For more details, see the [Hyperdisk documentation](https://cloud.google.com/compute/docs/disks/hyperdisks).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#provisioned_throughput GoogleComputeRegionInstanceTemplate#provisioned_throughput}

---

##### `resourceManagerTags`<sup>Optional</sup> <a name="resourceManagerTags" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.resourceManagerTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#resource_manager_tags GoogleComputeRegionInstanceTemplate#resource_manager_tags}

---

##### `resourcePolicies`<sup>Optional</sup> <a name="resourcePolicies" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.resourcePolicies"></a>

```java
public java.util.List<java.lang.String> getResourcePolicies();
```

- *Type:* java.util.List<java.lang.String>

A list (short name or id) of resource policies to attach to this disk.

Currently a max of 1 resource policy is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#resource_policies GoogleComputeRegionInstanceTemplate#resource_policies}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

The name (not self_link) of the disk (such as those managed by google_compute_disk) to attach.

~> Note: Either source or source_image is required when creating a new instance except for when creating a local SSD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#source GoogleComputeRegionInstanceTemplate#source}

---

##### `sourceImage`<sup>Optional</sup> <a name="sourceImage" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.sourceImage"></a>

```java
public java.lang.String getSourceImage();
```

- *Type:* java.lang.String

The image from which to initialize this disk.

This can be one of: the image's self_link, projects/{project}/global/images/{image}, projects/{project}/global/images/family/{family}, global/images/{image}, global/images/family/{family}, family/{family}, {project}/{family}, {project}/{image}, {family}, or {image}. ~> Note: Either source or source_image is required when creating a new instance except for when creating a local SSD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#source_image GoogleComputeRegionInstanceTemplate#source_image}

---

##### `sourceImageEncryptionKey`<sup>Optional</sup> <a name="sourceImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.sourceImageEncryptionKey"></a>

```java
public GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey getSourceImageEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey">GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey</a>

source_image_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#source_image_encryption_key GoogleComputeRegionInstanceTemplate#source_image_encryption_key}

---

##### `sourceSnapshot`<sup>Optional</sup> <a name="sourceSnapshot" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.sourceSnapshot"></a>

```java
public java.lang.String getSourceSnapshot();
```

- *Type:* java.lang.String

The source snapshot to create this disk.

When creating
a new instance, one of initializeParams.sourceSnapshot,
initializeParams.sourceImage, or disks.source is
required except for local SSD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#source_snapshot GoogleComputeRegionInstanceTemplate#source_snapshot}

---

##### `sourceSnapshotEncryptionKey`<sup>Optional</sup> <a name="sourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.sourceSnapshotEncryptionKey"></a>

```java
public GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey getSourceSnapshotEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey">GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

source_snapshot_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#source_snapshot_encryption_key GoogleComputeRegionInstanceTemplate#source_snapshot_encryption_key}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of Google Compute Engine disk, can be either "SCRATCH" or "PERSISTENT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#type GoogleComputeRegionInstanceTemplate#type}

---

### GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey <a name="GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey;

GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey.builder()
    .kmsKeySelfLink(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>java.lang.String</code> | The self link of the encryption key that is stored in Google Cloud KMS. |

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey.property.kmsKeySelfLink"></a>

```java
public java.lang.String getKmsKeySelfLink();
```

- *Type:* java.lang.String

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#kms_key_self_link GoogleComputeRegionInstanceTemplate#kms_key_self_link}

---

### GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey <a name="GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey;

GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey.builder()
    .kmsKeySelfLink(java.lang.String)
//  .kmsKeyServiceAccount(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>java.lang.String</code> | The self link of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>java.lang.String</code> | The service account being used for the encryption request for the given KMS key. |

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey.property.kmsKeySelfLink"></a>

```java
public java.lang.String getKmsKeySelfLink();
```

- *Type:* java.lang.String

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#kms_key_self_link GoogleComputeRegionInstanceTemplate#kms_key_self_link}

---

##### `kmsKeyServiceAccount`<sup>Optional</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey.property.kmsKeyServiceAccount"></a>

```java
public java.lang.String getKmsKeyServiceAccount();
```

- *Type:* java.lang.String

The service account being used for the encryption request for the given KMS key.

If absent, the Compute
Engine default service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#kms_key_service_account GoogleComputeRegionInstanceTemplate#kms_key_service_account}

---

### GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey <a name="GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey;

GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey.builder()
    .kmsKeySelfLink(java.lang.String)
//  .kmsKeyServiceAccount(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>java.lang.String</code> | The self link of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>java.lang.String</code> | The service account being used for the encryption request for the given KMS key. |

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey.property.kmsKeySelfLink"></a>

```java
public java.lang.String getKmsKeySelfLink();
```

- *Type:* java.lang.String

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#kms_key_self_link GoogleComputeRegionInstanceTemplate#kms_key_self_link}

---

##### `kmsKeyServiceAccount`<sup>Optional</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey.property.kmsKeyServiceAccount"></a>

```java
public java.lang.String getKmsKeyServiceAccount();
```

- *Type:* java.lang.String

The service account being used for the encryption request for the given KMS key.

If absent, the Compute
Engine default service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#kms_key_service_account GoogleComputeRegionInstanceTemplate#kms_key_service_account}

---

### GoogleComputeRegionInstanceTemplateGuestAccelerator <a name="GoogleComputeRegionInstanceTemplateGuestAccelerator" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAccelerator.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateGuestAccelerator;

GoogleComputeRegionInstanceTemplateGuestAccelerator.builder()
    .count(java.lang.Number)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAccelerator.property.count">count</a></code> | <code>java.lang.Number</code> | The number of the guest accelerator cards exposed to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAccelerator.property.type">type</a></code> | <code>java.lang.String</code> | The accelerator type resource to expose to this instance. E.g. nvidia-tesla-k80. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAccelerator.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

The number of the guest accelerator cards exposed to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#count GoogleComputeRegionInstanceTemplate#count}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAccelerator.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The accelerator type resource to expose to this instance. E.g. nvidia-tesla-k80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#type GoogleComputeRegionInstanceTemplate#type}

---

### GoogleComputeRegionInstanceTemplateNetworkInterface <a name="GoogleComputeRegionInstanceTemplateNetworkInterface" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateNetworkInterface;

GoogleComputeRegionInstanceTemplateNetworkInterface.builder()
//  .accessConfig(IResolvable)
//  .accessConfig(java.util.List<GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig>)
//  .aliasIpRange(IResolvable)
//  .aliasIpRange(java.util.List<GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange>)
//  .internalIpv6PrefixLength(java.lang.Number)
//  .ipv6AccessConfig(IResolvable)
//  .ipv6AccessConfig(java.util.List<GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig>)
//  .ipv6Address(java.lang.String)
//  .network(java.lang.String)
//  .networkIp(java.lang.String)
//  .nicType(java.lang.String)
//  .queueCount(java.lang.Number)
//  .stackType(java.lang.String)
//  .subnetwork(java.lang.String)
//  .subnetworkProject(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.accessConfig">accessConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig">GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig</a>></code> | access_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.aliasIpRange">aliasIpRange</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange">GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange</a>></code> | alias_ip_range block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.internalIpv6PrefixLength">internalIpv6PrefixLength</a></code> | <code>java.lang.Number</code> | The prefix length of the primary internal IPv6 range. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.ipv6AccessConfig">ipv6AccessConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig">GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>></code> | ipv6_access_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.ipv6Address">ipv6Address</a></code> | <code>java.lang.String</code> | An IPv6 internal network address for this network interface. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.network">network</a></code> | <code>java.lang.String</code> | The name or self_link of the network to attach this interface to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.networkIp">networkIp</a></code> | <code>java.lang.String</code> | The private IP address to assign to the instance. If empty, the address will be automatically assigned. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.nicType">nicType</a></code> | <code>java.lang.String</code> | The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET, MRDMA, and IRDMA. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.queueCount">queueCount</a></code> | <code>java.lang.Number</code> | The networking queue count that's specified by users for the network interface. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.stackType">stackType</a></code> | <code>java.lang.String</code> | The stack type for this network interface to identify whether the IPv6 feature is enabled or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | The name of the subnetwork to attach this interface to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.subnetworkProject">subnetworkProject</a></code> | <code>java.lang.String</code> | The ID of the project in which the subnetwork belongs. |

---

##### `accessConfig`<sup>Optional</sup> <a name="accessConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.accessConfig"></a>

```java
public java.lang.Object getAccessConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig">GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig</a>>

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#access_config GoogleComputeRegionInstanceTemplate#access_config}

---

##### `aliasIpRange`<sup>Optional</sup> <a name="aliasIpRange" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.aliasIpRange"></a>

```java
public java.lang.Object getAliasIpRange();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange">GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange</a>>

alias_ip_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#alias_ip_range GoogleComputeRegionInstanceTemplate#alias_ip_range}

---

##### `internalIpv6PrefixLength`<sup>Optional</sup> <a name="internalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.internalIpv6PrefixLength"></a>

```java
public java.lang.Number getInternalIpv6PrefixLength();
```

- *Type:* java.lang.Number

The prefix length of the primary internal IPv6 range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#internal_ipv6_prefix_length GoogleComputeRegionInstanceTemplate#internal_ipv6_prefix_length}

---

##### `ipv6AccessConfig`<sup>Optional</sup> <a name="ipv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.ipv6AccessConfig"></a>

```java
public java.lang.Object getIpv6AccessConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig">GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>>

ipv6_access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#ipv6_access_config GoogleComputeRegionInstanceTemplate#ipv6_access_config}

---

##### `ipv6Address`<sup>Optional</sup> <a name="ipv6Address" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.ipv6Address"></a>

```java
public java.lang.String getIpv6Address();
```

- *Type:* java.lang.String

An IPv6 internal network address for this network interface.

If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#ipv6_address GoogleComputeRegionInstanceTemplate#ipv6_address}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The name or self_link of the network to attach this interface to.

Use network attribute for Legacy or Auto subnetted networks and subnetwork for custom subnetted networks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#network GoogleComputeRegionInstanceTemplate#network}

---

##### `networkIp`<sup>Optional</sup> <a name="networkIp" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.networkIp"></a>

```java
public java.lang.String getNetworkIp();
```

- *Type:* java.lang.String

The private IP address to assign to the instance. If empty, the address will be automatically assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#network_ip GoogleComputeRegionInstanceTemplate#network_ip}

---

##### `nicType`<sup>Optional</sup> <a name="nicType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.nicType"></a>

```java
public java.lang.String getNicType();
```

- *Type:* java.lang.String

The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET, MRDMA, and IRDMA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#nic_type GoogleComputeRegionInstanceTemplate#nic_type}

---

##### `queueCount`<sup>Optional</sup> <a name="queueCount" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.queueCount"></a>

```java
public java.lang.Number getQueueCount();
```

- *Type:* java.lang.Number

The networking queue count that's specified by users for the network interface.

Both Rx and Tx queues will be set to this number. It will be empty if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#queue_count GoogleComputeRegionInstanceTemplate#queue_count}

---

##### `stackType`<sup>Optional</sup> <a name="stackType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.stackType"></a>

```java
public java.lang.String getStackType();
```

- *Type:* java.lang.String

The stack type for this network interface to identify whether the IPv6 feature is enabled or not.

If not specified, IPV4_ONLY will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#stack_type GoogleComputeRegionInstanceTemplate#stack_type}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

The name of the subnetwork to attach this interface to.

The subnetwork must exist in the same region this instance will be created in. Either network or subnetwork must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#subnetwork GoogleComputeRegionInstanceTemplate#subnetwork}

---

##### `subnetworkProject`<sup>Optional</sup> <a name="subnetworkProject" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.subnetworkProject"></a>

```java
public java.lang.String getSubnetworkProject();
```

- *Type:* java.lang.String

The ID of the project in which the subnetwork belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#subnetwork_project GoogleComputeRegionInstanceTemplate#subnetwork_project}

---

### GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig <a name="GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig;

GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig.builder()
//  .natIp(java.lang.String)
//  .networkTier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig.property.natIp">natIp</a></code> | <code>java.lang.String</code> | The IP address that will be 1:1 mapped to the instance's network ip. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig.property.networkTier">networkTier</a></code> | <code>java.lang.String</code> | The networking tier used for configuring this instance template. |

---

##### `natIp`<sup>Optional</sup> <a name="natIp" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig.property.natIp"></a>

```java
public java.lang.String getNatIp();
```

- *Type:* java.lang.String

The IP address that will be 1:1 mapped to the instance's network ip.

If not given, one will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#nat_ip GoogleComputeRegionInstanceTemplate#nat_ip}

---

##### `networkTier`<sup>Optional</sup> <a name="networkTier" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig.property.networkTier"></a>

```java
public java.lang.String getNetworkTier();
```

- *Type:* java.lang.String

The networking tier used for configuring this instance template.

This field can take the following values: PREMIUM, STANDARD, FIXED_STANDARD. If this field is not specified, it is assumed to be PREMIUM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#network_tier GoogleComputeRegionInstanceTemplate#network_tier}

---

### GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange <a name="GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange;

GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange.builder()
    .ipCidrRange(java.lang.String)
//  .subnetworkRangeName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | The IP CIDR range represented by this alias IP range. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange.property.subnetworkRangeName">subnetworkRangeName</a></code> | <code>java.lang.String</code> | The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range. |

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

The IP CIDR range represented by this alias IP range.

This IP CIDR range must belong to the specified subnetwork and cannot contain IP addresses reserved by system or used by other network interfaces. At the time of writing only a netmask (e.g. /24) may be supplied, with a CIDR format resulting in an API error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#ip_cidr_range GoogleComputeRegionInstanceTemplate#ip_cidr_range}

---

##### `subnetworkRangeName`<sup>Optional</sup> <a name="subnetworkRangeName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange.property.subnetworkRangeName"></a>

```java
public java.lang.String getSubnetworkRangeName();
```

- *Type:* java.lang.String

The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range.

If left unspecified, the primary range of the subnetwork will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#subnetwork_range_name GoogleComputeRegionInstanceTemplate#subnetwork_range_name}

---

### GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig <a name="GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig;

GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig.builder()
    .networkTier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig.property.networkTier">networkTier</a></code> | <code>java.lang.String</code> | The service-level to be provided for IPv6 traffic when the subnet has an external subnet. |

---

##### `networkTier`<sup>Required</sup> <a name="networkTier" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig.property.networkTier"></a>

```java
public java.lang.String getNetworkTier();
```

- *Type:* java.lang.String

The service-level to be provided for IPv6 traffic when the subnet has an external subnet.

Only PREMIUM tier is valid for IPv6

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#network_tier GoogleComputeRegionInstanceTemplate#network_tier}

---

### GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig <a name="GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig;

GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig.builder()
    .totalEgressBandwidthTier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig.property.totalEgressBandwidthTier">totalEgressBandwidthTier</a></code> | <code>java.lang.String</code> | The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT. |

---

##### `totalEgressBandwidthTier`<sup>Required</sup> <a name="totalEgressBandwidthTier" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig.property.totalEgressBandwidthTier"></a>

```java
public java.lang.String getTotalEgressBandwidthTier();
```

- *Type:* java.lang.String

The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#total_egress_bandwidth_tier GoogleComputeRegionInstanceTemplate#total_egress_bandwidth_tier}

---

### GoogleComputeRegionInstanceTemplateReservationAffinity <a name="GoogleComputeRegionInstanceTemplateReservationAffinity" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateReservationAffinity;

GoogleComputeRegionInstanceTemplateReservationAffinity.builder()
    .type(java.lang.String)
//  .specificReservation(GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinity.property.type">type</a></code> | <code>java.lang.String</code> | The type of reservation from which this instance can consume resources. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinity.property.specificReservation">specificReservation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation">GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation</a></code> | specific_reservation block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of reservation from which this instance can consume resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#type GoogleComputeRegionInstanceTemplate#type}

---

##### `specificReservation`<sup>Optional</sup> <a name="specificReservation" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinity.property.specificReservation"></a>

```java
public GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation getSpecificReservation();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation">GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation</a>

specific_reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#specific_reservation GoogleComputeRegionInstanceTemplate#specific_reservation}

---

### GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation <a name="GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation;

GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation.builder()
    .key(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation.property.key">key</a></code> | <code>java.lang.String</code> | Corresponds to the label key of a reservation resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Corresponds to the label values of a reservation resource. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Corresponds to the label key of a reservation resource.

To target a SPECIFIC_RESERVATION by name, specify compute.googleapis.com/reservation-name as the key and specify the name of your reservation as the only value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#key GoogleComputeRegionInstanceTemplate#key}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Corresponds to the label values of a reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#values GoogleComputeRegionInstanceTemplate#values}

---

### GoogleComputeRegionInstanceTemplateScheduling <a name="GoogleComputeRegionInstanceTemplateScheduling" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateScheduling;

GoogleComputeRegionInstanceTemplateScheduling.builder()
//  .automaticRestart(java.lang.Boolean)
//  .automaticRestart(IResolvable)
//  .availabilityDomain(java.lang.Number)
//  .gracefulShutdown(GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown)
//  .hostErrorTimeoutSeconds(java.lang.Number)
//  .instanceTerminationAction(java.lang.String)
//  .localSsdRecoveryTimeout(IResolvable)
//  .localSsdRecoveryTimeout(java.util.List<GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout>)
//  .maintenanceInterval(java.lang.String)
//  .maxRunDuration(GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration)
//  .minNodeCpus(java.lang.Number)
//  .nodeAffinities(IResolvable)
//  .nodeAffinities(java.util.List<GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities>)
//  .onHostMaintenance(java.lang.String)
//  .onInstanceStopAction(GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction)
//  .preemptible(java.lang.Boolean)
//  .preemptible(IResolvable)
//  .provisioningModel(java.lang.String)
//  .terminationTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.automaticRestart">automaticRestart</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether the instance should be automatically restarted if it is terminated by Compute Engine (not terminated by a user). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.Number</code> | Specifies the availability domain, which this instance should be scheduled on. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.gracefulShutdown">gracefulShutdown</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown">GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown</a></code> | graceful_shutdown block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.hostErrorTimeoutSeconds">hostErrorTimeoutSeconds</a></code> | <code>java.lang.Number</code> | Specify the time in seconds for host error detection, the value must be within the range of [90, 330] with the increment of 30, if unset, the default behavior of host error recovery will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.instanceTerminationAction">instanceTerminationAction</a></code> | <code>java.lang.String</code> | Specifies the action GCE should take when SPOT VM is preempted. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.localSsdRecoveryTimeout">localSsdRecoveryTimeout</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout">GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>></code> | local_ssd_recovery_timeout block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.maintenanceInterval">maintenanceInterval</a></code> | <code>java.lang.String</code> | Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.maxRunDuration">maxRunDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration">GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration</a></code> | max_run_duration block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.minNodeCpus">minNodeCpus</a></code> | <code>java.lang.Number</code> | Minimum number of cpus for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.nodeAffinities">nodeAffinities</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities">GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities</a>></code> | node_affinities block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.onHostMaintenance">onHostMaintenance</a></code> | <code>java.lang.String</code> | Defines the maintenance behavior for this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.onInstanceStopAction">onInstanceStopAction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction">GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction</a></code> | on_instance_stop_action block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.preemptible">preemptible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allows instance to be preempted. This defaults to false. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.provisioningModel">provisioningModel</a></code> | <code>java.lang.String</code> | Whether the instance is spot. If this is set as SPOT. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.terminationTime">terminationTime</a></code> | <code>java.lang.String</code> | Specifies the timestamp, when the instance will be terminated, in RFC3339 text format. |

---

##### `automaticRestart`<sup>Optional</sup> <a name="automaticRestart" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.automaticRestart"></a>

```java
public java.lang.Object getAutomaticRestart();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether the instance should be automatically restarted if it is terminated by Compute Engine (not terminated by a user).

This defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#automatic_restart GoogleComputeRegionInstanceTemplate#automatic_restart}

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.availabilityDomain"></a>

```java
public java.lang.Number getAvailabilityDomain();
```

- *Type:* java.lang.Number

Specifies the availability domain, which this instance should be scheduled on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#availability_domain GoogleComputeRegionInstanceTemplate#availability_domain}

---

##### `gracefulShutdown`<sup>Optional</sup> <a name="gracefulShutdown" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.gracefulShutdown"></a>

```java
public GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown getGracefulShutdown();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown">GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown</a>

graceful_shutdown block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#graceful_shutdown GoogleComputeRegionInstanceTemplate#graceful_shutdown}

---

##### `hostErrorTimeoutSeconds`<sup>Optional</sup> <a name="hostErrorTimeoutSeconds" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.hostErrorTimeoutSeconds"></a>

```java
public java.lang.Number getHostErrorTimeoutSeconds();
```

- *Type:* java.lang.Number

Specify the time in seconds for host error detection, the value must be within the range of [90, 330] with the increment of 30, if unset, the default behavior of host error recovery will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#host_error_timeout_seconds GoogleComputeRegionInstanceTemplate#host_error_timeout_seconds}

---

##### `instanceTerminationAction`<sup>Optional</sup> <a name="instanceTerminationAction" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.instanceTerminationAction"></a>

```java
public java.lang.String getInstanceTerminationAction();
```

- *Type:* java.lang.String

Specifies the action GCE should take when SPOT VM is preempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#instance_termination_action GoogleComputeRegionInstanceTemplate#instance_termination_action}

---

##### `localSsdRecoveryTimeout`<sup>Optional</sup> <a name="localSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.localSsdRecoveryTimeout"></a>

```java
public java.lang.Object getLocalSsdRecoveryTimeout();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout">GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>>

local_ssd_recovery_timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#local_ssd_recovery_timeout GoogleComputeRegionInstanceTemplate#local_ssd_recovery_timeout}

---

##### `maintenanceInterval`<sup>Optional</sup> <a name="maintenanceInterval" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.maintenanceInterval"></a>

```java
public java.lang.String getMaintenanceInterval();
```

- *Type:* java.lang.String

Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#maintenance_interval GoogleComputeRegionInstanceTemplate#maintenance_interval}

---

##### `maxRunDuration`<sup>Optional</sup> <a name="maxRunDuration" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.maxRunDuration"></a>

```java
public GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration getMaxRunDuration();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration">GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration</a>

max_run_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#max_run_duration GoogleComputeRegionInstanceTemplate#max_run_duration}

---

##### `minNodeCpus`<sup>Optional</sup> <a name="minNodeCpus" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.minNodeCpus"></a>

```java
public java.lang.Number getMinNodeCpus();
```

- *Type:* java.lang.Number

Minimum number of cpus for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#min_node_cpus GoogleComputeRegionInstanceTemplate#min_node_cpus}

---

##### `nodeAffinities`<sup>Optional</sup> <a name="nodeAffinities" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.nodeAffinities"></a>

```java
public java.lang.Object getNodeAffinities();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities">GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities</a>>

node_affinities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#node_affinities GoogleComputeRegionInstanceTemplate#node_affinities}

---

##### `onHostMaintenance`<sup>Optional</sup> <a name="onHostMaintenance" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.onHostMaintenance"></a>

```java
public java.lang.String getOnHostMaintenance();
```

- *Type:* java.lang.String

Defines the maintenance behavior for this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#on_host_maintenance GoogleComputeRegionInstanceTemplate#on_host_maintenance}

---

##### `onInstanceStopAction`<sup>Optional</sup> <a name="onInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.onInstanceStopAction"></a>

```java
public GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction getOnInstanceStopAction();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction">GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction</a>

on_instance_stop_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#on_instance_stop_action GoogleComputeRegionInstanceTemplate#on_instance_stop_action}

---

##### `preemptible`<sup>Optional</sup> <a name="preemptible" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.preemptible"></a>

```java
public java.lang.Object getPreemptible();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allows instance to be preempted. This defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#preemptible GoogleComputeRegionInstanceTemplate#preemptible}

---

##### `provisioningModel`<sup>Optional</sup> <a name="provisioningModel" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.provisioningModel"></a>

```java
public java.lang.String getProvisioningModel();
```

- *Type:* java.lang.String

Whether the instance is spot. If this is set as SPOT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#provisioning_model GoogleComputeRegionInstanceTemplate#provisioning_model}

---

##### `terminationTime`<sup>Optional</sup> <a name="terminationTime" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.terminationTime"></a>

```java
public java.lang.String getTerminationTime();
```

- *Type:* java.lang.String

Specifies the timestamp, when the instance will be terminated, in RFC3339 text format.

If specified, the instance termination action
will be performed at the termination time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#termination_time GoogleComputeRegionInstanceTemplate#termination_time}

---

### GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown <a name="GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown;

GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .maxDuration(GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Opts-in for graceful shutdown. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown.property.maxDuration">maxDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration">GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration</a></code> | max_duration block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Opts-in for graceful shutdown.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#enabled GoogleComputeRegionInstanceTemplate#enabled}

---

##### `maxDuration`<sup>Optional</sup> <a name="maxDuration" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown.property.maxDuration"></a>

```java
public GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration getMaxDuration();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration">GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration</a>

max_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#max_duration GoogleComputeRegionInstanceTemplate#max_duration}

---

### GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration <a name="GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration;

GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration.builder()
    .seconds(java.lang.Number)
//  .nanos(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Span of time at a resolution of a second. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Span of time that's a fraction of a second at nanosecond 													resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Span of time at a resolution of a second.

The value must be between 1 and 3600, which is 3,600 seconds (one hour).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#seconds GoogleComputeRegionInstanceTemplate#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Span of time that's a fraction of a second at nanosecond 													resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#nanos GoogleComputeRegionInstanceTemplate#nanos}

---

### GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout <a name="GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout;

GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout.builder()
    .seconds(java.lang.Number)
//  .nanos(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#seconds GoogleComputeRegionInstanceTemplate#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#nanos GoogleComputeRegionInstanceTemplate#nanos}

---

### GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration <a name="GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration;

GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration.builder()
    .seconds(java.lang.Number)
//  .nanos(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#seconds GoogleComputeRegionInstanceTemplate#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#nanos GoogleComputeRegionInstanceTemplate#nanos}

---

### GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities <a name="GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities;

GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities.builder()
    .key(java.lang.String)
    .operator(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#key GoogleComputeRegionInstanceTemplate#key}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#operator GoogleComputeRegionInstanceTemplate#operator}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#values GoogleComputeRegionInstanceTemplate#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#key GoogleComputeRegionInstanceTemplate#key}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#operator GoogleComputeRegionInstanceTemplate#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#values GoogleComputeRegionInstanceTemplate#values}.

---

### GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction <a name="GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction;

GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction.builder()
//  .discardLocalSsd(java.lang.Boolean)
//  .discardLocalSsd(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction.property.discardLocalSsd">discardLocalSsd</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the contents of any attached Local SSD disks will be discarded. |

---

##### `discardLocalSsd`<sup>Optional</sup> <a name="discardLocalSsd" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction.property.discardLocalSsd"></a>

```java
public java.lang.Object getDiscardLocalSsd();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the contents of any attached Local SSD disks will be discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#discard_local_ssd GoogleComputeRegionInstanceTemplate#discard_local_ssd}

---

### GoogleComputeRegionInstanceTemplateServiceAccount <a name="GoogleComputeRegionInstanceTemplateServiceAccount" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateServiceAccount;

GoogleComputeRegionInstanceTemplateServiceAccount.builder()
    .scopes(java.util.List<java.lang.String>)
//  .email(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccount.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | A list of service scopes. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccount.property.email">email</a></code> | <code>java.lang.String</code> | The service account e-mail address. If not given, the default Google Compute Engine service account is used. |

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccount.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

A list of service scopes.

Both OAuth2 URLs and gcloud short names are supported. To allow full access to all Cloud APIs, use the cloud-platform scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#scopes GoogleComputeRegionInstanceTemplate#scopes}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccount.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

The service account e-mail address. If not given, the default Google Compute Engine service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#email GoogleComputeRegionInstanceTemplate#email}

---

### GoogleComputeRegionInstanceTemplateShieldedInstanceConfig <a name="GoogleComputeRegionInstanceTemplateShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateShieldedInstanceConfig;

GoogleComputeRegionInstanceTemplateShieldedInstanceConfig.builder()
//  .enableIntegrityMonitoring(java.lang.Boolean)
//  .enableIntegrityMonitoring(IResolvable)
//  .enableSecureBoot(java.lang.Boolean)
//  .enableSecureBoot(IResolvable)
//  .enableVtpm(java.lang.Boolean)
//  .enableVtpm(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfig.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Compare the most recent boot measurements to the integrity policy baseline and return a pair of pass/fail results depending on whether they match or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfig.property.enableSecureBoot">enableSecureBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Verify the digital signature of all boot components, and halt the boot process if signature verification fails. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfig.property.enableVtpm">enableVtpm</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Use a virtualized trusted platform module, which is a specialized computer chip you can use to encrypt objects like keys and certificates. |

---

##### `enableIntegrityMonitoring`<sup>Optional</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```java
public java.lang.Object getEnableIntegrityMonitoring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Compare the most recent boot measurements to the integrity policy baseline and return a pair of pass/fail results depending on whether they match or not.

Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#enable_integrity_monitoring GoogleComputeRegionInstanceTemplate#enable_integrity_monitoring}

---

##### `enableSecureBoot`<sup>Optional</sup> <a name="enableSecureBoot" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfig.property.enableSecureBoot"></a>

```java
public java.lang.Object getEnableSecureBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Verify the digital signature of all boot components, and halt the boot process if signature verification fails.

Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#enable_secure_boot GoogleComputeRegionInstanceTemplate#enable_secure_boot}

---

##### `enableVtpm`<sup>Optional</sup> <a name="enableVtpm" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfig.property.enableVtpm"></a>

```java
public java.lang.Object getEnableVtpm();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Use a virtualized trusted platform module, which is a specialized computer chip you can use to encrypt objects like keys and certificates.

Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#enable_vtpm GoogleComputeRegionInstanceTemplate#enable_vtpm}

---

### GoogleComputeRegionInstanceTemplateTimeouts <a name="GoogleComputeRegionInstanceTemplateTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateTimeouts;

GoogleComputeRegionInstanceTemplateTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#create GoogleComputeRegionInstanceTemplate#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#delete GoogleComputeRegionInstanceTemplate#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#create GoogleComputeRegionInstanceTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_instance_template#delete GoogleComputeRegionInstanceTemplate#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference <a name="GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference;

new GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resetEnableNestedVirtualization">resetEnableNestedVirtualization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resetEnableUefiNetworking">resetEnableUefiNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resetPerformanceMonitoringUnit">resetPerformanceMonitoringUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resetThreadsPerCore">resetThreadsPerCore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resetTurboMode">resetTurboMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resetVisibleCoreCount">resetVisibleCoreCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableNestedVirtualization` <a name="resetEnableNestedVirtualization" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resetEnableNestedVirtualization"></a>

```java
public void resetEnableNestedVirtualization()
```

##### `resetEnableUefiNetworking` <a name="resetEnableUefiNetworking" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resetEnableUefiNetworking"></a>

```java
public void resetEnableUefiNetworking()
```

##### `resetPerformanceMonitoringUnit` <a name="resetPerformanceMonitoringUnit" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resetPerformanceMonitoringUnit"></a>

```java
public void resetPerformanceMonitoringUnit()
```

##### `resetThreadsPerCore` <a name="resetThreadsPerCore" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resetThreadsPerCore"></a>

```java
public void resetThreadsPerCore()
```

##### `resetTurboMode` <a name="resetTurboMode" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resetTurboMode"></a>

```java
public void resetTurboMode()
```

##### `resetVisibleCoreCount` <a name="resetVisibleCoreCount" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resetVisibleCoreCount"></a>

```java
public void resetVisibleCoreCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualizationInput">enableNestedVirtualizationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworkingInput">enableUefiNetworkingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnitInput">performanceMonitoringUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput">threadsPerCoreInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.turboModeInput">turboModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCountInput">visibleCoreCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization">enableNestedVirtualization</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworking">enableUefiNetworking</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnit">performanceMonitoringUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCore">threadsPerCore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.turboMode">turboMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCount">visibleCoreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures">GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableNestedVirtualizationInput`<sup>Optional</sup> <a name="enableNestedVirtualizationInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualizationInput"></a>

```java
public java.lang.Object getEnableNestedVirtualizationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableUefiNetworkingInput`<sup>Optional</sup> <a name="enableUefiNetworkingInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworkingInput"></a>

```java
public java.lang.Object getEnableUefiNetworkingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `performanceMonitoringUnitInput`<sup>Optional</sup> <a name="performanceMonitoringUnitInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnitInput"></a>

```java
public java.lang.String getPerformanceMonitoringUnitInput();
```

- *Type:* java.lang.String

---

##### `threadsPerCoreInput`<sup>Optional</sup> <a name="threadsPerCoreInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput"></a>

```java
public java.lang.Number getThreadsPerCoreInput();
```

- *Type:* java.lang.Number

---

##### `turboModeInput`<sup>Optional</sup> <a name="turboModeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.turboModeInput"></a>

```java
public java.lang.String getTurboModeInput();
```

- *Type:* java.lang.String

---

##### `visibleCoreCountInput`<sup>Optional</sup> <a name="visibleCoreCountInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCountInput"></a>

```java
public java.lang.Number getVisibleCoreCountInput();
```

- *Type:* java.lang.Number

---

##### `enableNestedVirtualization`<sup>Required</sup> <a name="enableNestedVirtualization" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization"></a>

```java
public java.lang.Object getEnableNestedVirtualization();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableUefiNetworking`<sup>Required</sup> <a name="enableUefiNetworking" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworking"></a>

```java
public java.lang.Object getEnableUefiNetworking();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `performanceMonitoringUnit`<sup>Required</sup> <a name="performanceMonitoringUnit" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnit"></a>

```java
public java.lang.String getPerformanceMonitoringUnit();
```

- *Type:* java.lang.String

---

##### `threadsPerCore`<sup>Required</sup> <a name="threadsPerCore" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCore"></a>

```java
public java.lang.Number getThreadsPerCore();
```

- *Type:* java.lang.Number

---

##### `turboMode`<sup>Required</sup> <a name="turboMode" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.turboMode"></a>

```java
public java.lang.String getTurboMode();
```

- *Type:* java.lang.String

---

##### `visibleCoreCount`<sup>Required</sup> <a name="visibleCoreCount" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCount"></a>

```java
public java.lang.Number getVisibleCoreCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures">GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures</a>

---


### GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference <a name="GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference;

new GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.resetConfidentialInstanceType">resetConfidentialInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute">resetEnableConfidentialCompute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfidentialInstanceType` <a name="resetConfidentialInstanceType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.resetConfidentialInstanceType"></a>

```java
public void resetConfidentialInstanceType()
```

##### `resetEnableConfidentialCompute` <a name="resetEnableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute"></a>

```java
public void resetEnableConfidentialCompute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceTypeInput">confidentialInstanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput">enableConfidentialComputeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceType">confidentialInstanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute">enableConfidentialCompute</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig">GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `confidentialInstanceTypeInput`<sup>Optional</sup> <a name="confidentialInstanceTypeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceTypeInput"></a>

```java
public java.lang.String getConfidentialInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `enableConfidentialComputeInput`<sup>Optional</sup> <a name="enableConfidentialComputeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput"></a>

```java
public java.lang.Object getEnableConfidentialComputeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `confidentialInstanceType`<sup>Required</sup> <a name="confidentialInstanceType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceType"></a>

```java
public java.lang.String getConfidentialInstanceType();
```

- *Type:* java.lang.String

---

##### `enableConfidentialCompute`<sup>Required</sup> <a name="enableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute"></a>

```java
public java.lang.Object getEnableConfidentialCompute();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig">GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig</a>

---


### GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference <a name="GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference;

new GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kmsKeySelfLinkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey">GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeySelfLinkInput`<sup>Optional</sup> <a name="kmsKeySelfLinkInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```java
public java.lang.String getKmsKeySelfLinkInput();
```

- *Type:* java.lang.String

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```java
public java.lang.String getKmsKeySelfLink();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey">GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey</a>

---


### GoogleComputeRegionInstanceTemplateDiskList <a name="GoogleComputeRegionInstanceTemplateDiskList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateDiskList;

new GoogleComputeRegionInstanceTemplateDiskList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.get"></a>

```java
public GoogleComputeRegionInstanceTemplateDiskOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk">GoogleComputeRegionInstanceTemplateDisk</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk">GoogleComputeRegionInstanceTemplateDisk</a>>

---


### GoogleComputeRegionInstanceTemplateDiskOutputReference <a name="GoogleComputeRegionInstanceTemplateDiskOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateDiskOutputReference;

new GoogleComputeRegionInstanceTemplateDiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.putDiskEncryptionKey">putDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.putSourceImageEncryptionKey">putSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.putSourceSnapshotEncryptionKey">putSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetAutoDelete">resetAutoDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetBoot">resetBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetDeviceName">resetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetDiskEncryptionKey">resetDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetDiskName">resetDiskName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetDiskType">resetDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetInterface">resetInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetProvisionedIops">resetProvisionedIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetProvisionedThroughput">resetProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetResourceManagerTags">resetResourceManagerTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetResourcePolicies">resetResourcePolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetSourceImage">resetSourceImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetSourceImageEncryptionKey">resetSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetSourceSnapshot">resetSourceSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetSourceSnapshotEncryptionKey">resetSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDiskEncryptionKey` <a name="putDiskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.putDiskEncryptionKey"></a>

```java
public void putDiskEncryptionKey(GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.putDiskEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey">GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey</a>

---

##### `putSourceImageEncryptionKey` <a name="putSourceImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.putSourceImageEncryptionKey"></a>

```java
public void putSourceImageEncryptionKey(GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.putSourceImageEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey">GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey</a>

---

##### `putSourceSnapshotEncryptionKey` <a name="putSourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.putSourceSnapshotEncryptionKey"></a>

```java
public void putSourceSnapshotEncryptionKey(GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.putSourceSnapshotEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey">GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

---

##### `resetAutoDelete` <a name="resetAutoDelete" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetAutoDelete"></a>

```java
public void resetAutoDelete()
```

##### `resetBoot` <a name="resetBoot" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetBoot"></a>

```java
public void resetBoot()
```

##### `resetDeviceName` <a name="resetDeviceName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetDeviceName"></a>

```java
public void resetDeviceName()
```

##### `resetDiskEncryptionKey` <a name="resetDiskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetDiskEncryptionKey"></a>

```java
public void resetDiskEncryptionKey()
```

##### `resetDiskName` <a name="resetDiskName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetDiskName"></a>

```java
public void resetDiskName()
```

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetDiskSizeGb"></a>

```java
public void resetDiskSizeGb()
```

##### `resetDiskType` <a name="resetDiskType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetDiskType"></a>

```java
public void resetDiskType()
```

##### `resetInterface` <a name="resetInterface" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetInterface"></a>

```java
public void resetInterface()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetMode"></a>

```java
public void resetMode()
```

##### `resetProvisionedIops` <a name="resetProvisionedIops" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetProvisionedIops"></a>

```java
public void resetProvisionedIops()
```

##### `resetProvisionedThroughput` <a name="resetProvisionedThroughput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetProvisionedThroughput"></a>

```java
public void resetProvisionedThroughput()
```

##### `resetResourceManagerTags` <a name="resetResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetResourceManagerTags"></a>

```java
public void resetResourceManagerTags()
```

##### `resetResourcePolicies` <a name="resetResourcePolicies" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetResourcePolicies"></a>

```java
public void resetResourcePolicies()
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetSource"></a>

```java
public void resetSource()
```

##### `resetSourceImage` <a name="resetSourceImage" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetSourceImage"></a>

```java
public void resetSourceImage()
```

##### `resetSourceImageEncryptionKey` <a name="resetSourceImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetSourceImageEncryptionKey"></a>

```java
public void resetSourceImageEncryptionKey()
```

##### `resetSourceSnapshot` <a name="resetSourceSnapshot" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetSourceSnapshot"></a>

```java
public void resetSourceSnapshot()
```

##### `resetSourceSnapshotEncryptionKey` <a name="resetSourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetSourceSnapshotEncryptionKey"></a>

```java
public void resetSourceSnapshotEncryptionKey()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskEncryptionKey">diskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference">GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKey">sourceImageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference">GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKey">sourceSnapshotEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference">GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.autoDeleteInput">autoDeleteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.bootInput">bootInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskEncryptionKeyInput">diskEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey">GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskNameInput">diskNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskTypeInput">diskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.interfaceInput">interfaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.provisionedIopsInput">provisionedIopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.provisionedThroughputInput">provisionedThroughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.resourceManagerTagsInput">resourceManagerTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.resourcePoliciesInput">resourcePoliciesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKeyInput">sourceImageEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey">GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceImageInput">sourceImageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKeyInput">sourceSnapshotEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey">GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshotInput">sourceSnapshotInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.autoDelete">autoDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.boot">boot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskName">diskName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskType">diskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.interface">interface</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.provisionedIops">provisionedIops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.provisionedThroughput">provisionedThroughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.resourceManagerTags">resourceManagerTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.resourcePolicies">resourcePolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceImage">sourceImage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshot">sourceSnapshot</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk">GoogleComputeRegionInstanceTemplateDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskEncryptionKey`<sup>Required</sup> <a name="diskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskEncryptionKey"></a>

```java
public GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference getDiskEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference">GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference</a>

---

##### `sourceImageEncryptionKey`<sup>Required</sup> <a name="sourceImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKey"></a>

```java
public GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference getSourceImageEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference">GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference</a>

---

##### `sourceSnapshotEncryptionKey`<sup>Required</sup> <a name="sourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKey"></a>

```java
public GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference getSourceSnapshotEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference">GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference</a>

---

##### `autoDeleteInput`<sup>Optional</sup> <a name="autoDeleteInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.autoDeleteInput"></a>

```java
public java.lang.Object getAutoDeleteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bootInput`<sup>Optional</sup> <a name="bootInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.bootInput"></a>

```java
public java.lang.Object getBootInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.deviceNameInput"></a>

```java
public java.lang.String getDeviceNameInput();
```

- *Type:* java.lang.String

---

##### `diskEncryptionKeyInput`<sup>Optional</sup> <a name="diskEncryptionKeyInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskEncryptionKeyInput"></a>

```java
public GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey getDiskEncryptionKeyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey">GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey</a>

---

##### `diskNameInput`<sup>Optional</sup> <a name="diskNameInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskNameInput"></a>

```java
public java.lang.String getDiskNameInput();
```

- *Type:* java.lang.String

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskSizeGbInput"></a>

```java
public java.lang.Number getDiskSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `diskTypeInput`<sup>Optional</sup> <a name="diskTypeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskTypeInput"></a>

```java
public java.lang.String getDiskTypeInput();
```

- *Type:* java.lang.String

---

##### `interfaceInput`<sup>Optional</sup> <a name="interfaceInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.interfaceInput"></a>

```java
public java.lang.String getInterfaceInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `provisionedIopsInput`<sup>Optional</sup> <a name="provisionedIopsInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.provisionedIopsInput"></a>

```java
public java.lang.Number getProvisionedIopsInput();
```

- *Type:* java.lang.Number

---

##### `provisionedThroughputInput`<sup>Optional</sup> <a name="provisionedThroughputInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.provisionedThroughputInput"></a>

```java
public java.lang.Number getProvisionedThroughputInput();
```

- *Type:* java.lang.Number

---

##### `resourceManagerTagsInput`<sup>Optional</sup> <a name="resourceManagerTagsInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.resourceManagerTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `resourcePoliciesInput`<sup>Optional</sup> <a name="resourcePoliciesInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.resourcePoliciesInput"></a>

```java
public java.util.List<java.lang.String> getResourcePoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceImageEncryptionKeyInput`<sup>Optional</sup> <a name="sourceImageEncryptionKeyInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKeyInput"></a>

```java
public GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey getSourceImageEncryptionKeyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey">GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey</a>

---

##### `sourceImageInput`<sup>Optional</sup> <a name="sourceImageInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceImageInput"></a>

```java
public java.lang.String getSourceImageInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `sourceSnapshotEncryptionKeyInput`<sup>Optional</sup> <a name="sourceSnapshotEncryptionKeyInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKeyInput"></a>

```java
public GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey getSourceSnapshotEncryptionKeyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey">GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

---

##### `sourceSnapshotInput`<sup>Optional</sup> <a name="sourceSnapshotInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshotInput"></a>

```java
public java.lang.String getSourceSnapshotInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `autoDelete`<sup>Required</sup> <a name="autoDelete" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.autoDelete"></a>

```java
public java.lang.Object getAutoDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `boot`<sup>Required</sup> <a name="boot" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.boot"></a>

```java
public java.lang.Object getBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

---

##### `diskName`<sup>Required</sup> <a name="diskName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskName"></a>

```java
public java.lang.String getDiskName();
```

- *Type:* java.lang.String

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskType"></a>

```java
public java.lang.String getDiskType();
```

- *Type:* java.lang.String

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.interface"></a>

```java
public java.lang.String getInterface();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `provisionedIops`<sup>Required</sup> <a name="provisionedIops" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.provisionedIops"></a>

```java
public java.lang.Number getProvisionedIops();
```

- *Type:* java.lang.Number

---

##### `provisionedThroughput`<sup>Required</sup> <a name="provisionedThroughput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.provisionedThroughput"></a>

```java
public java.lang.Number getProvisionedThroughput();
```

- *Type:* java.lang.Number

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.resourceManagerTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `resourcePolicies`<sup>Required</sup> <a name="resourcePolicies" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.resourcePolicies"></a>

```java
public java.util.List<java.lang.String> getResourcePolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `sourceImage`<sup>Required</sup> <a name="sourceImage" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceImage"></a>

```java
public java.lang.String getSourceImage();
```

- *Type:* java.lang.String

---

##### `sourceSnapshot`<sup>Required</sup> <a name="sourceSnapshot" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshot"></a>

```java
public java.lang.String getSourceSnapshot();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk">GoogleComputeRegionInstanceTemplateDisk</a>

---


### GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference <a name="GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference;

new GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount">resetKmsKeyServiceAccount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyServiceAccount` <a name="resetKmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```java
public void resetKmsKeyServiceAccount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kmsKeySelfLinkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kmsKeyServiceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey">GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeySelfLinkInput`<sup>Optional</sup> <a name="kmsKeySelfLinkInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```java
public java.lang.String getKmsKeySelfLinkInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyServiceAccountInput`<sup>Optional</sup> <a name="kmsKeyServiceAccountInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```java
public java.lang.String getKmsKeyServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```java
public java.lang.String getKmsKeySelfLink();
```

- *Type:* java.lang.String

---

##### `kmsKeyServiceAccount`<sup>Required</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```java
public java.lang.String getKmsKeyServiceAccount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey">GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey</a>

---


### GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference <a name="GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference;

new GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount">resetKmsKeyServiceAccount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyServiceAccount` <a name="resetKmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```java
public void resetKmsKeyServiceAccount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kmsKeySelfLinkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kmsKeyServiceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey">GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeySelfLinkInput`<sup>Optional</sup> <a name="kmsKeySelfLinkInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```java
public java.lang.String getKmsKeySelfLinkInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyServiceAccountInput`<sup>Optional</sup> <a name="kmsKeyServiceAccountInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```java
public java.lang.String getKmsKeyServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```java
public java.lang.String getKmsKeySelfLink();
```

- *Type:* java.lang.String

---

##### `kmsKeyServiceAccount`<sup>Required</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```java
public java.lang.String getKmsKeyServiceAccount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey">GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

---


### GoogleComputeRegionInstanceTemplateGuestAcceleratorList <a name="GoogleComputeRegionInstanceTemplateGuestAcceleratorList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateGuestAcceleratorList;

new GoogleComputeRegionInstanceTemplateGuestAcceleratorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.get"></a>

```java
public GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAccelerator">GoogleComputeRegionInstanceTemplateGuestAccelerator</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAccelerator">GoogleComputeRegionInstanceTemplateGuestAccelerator</a>>

---


### GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference <a name="GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference;

new GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAccelerator">GoogleComputeRegionInstanceTemplateGuestAccelerator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAccelerator">GoogleComputeRegionInstanceTemplateGuestAccelerator</a>

---


### GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList <a name="GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList;

new GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.get"></a>

```java
public GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig">GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig">GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig</a>>

---


### GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference <a name="GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference;

new GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resetNatIp">resetNatIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resetNetworkTier">resetNetworkTier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNatIp` <a name="resetNatIp" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resetNatIp"></a>

```java
public void resetNatIp()
```

##### `resetNetworkTier` <a name="resetNetworkTier" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resetNetworkTier"></a>

```java
public void resetNetworkTier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName">publicPtrDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIpInput">natIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTierInput">networkTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIp">natIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTier">networkTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig">GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `publicPtrDomainName`<sup>Required</sup> <a name="publicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName"></a>

```java
public java.lang.String getPublicPtrDomainName();
```

- *Type:* java.lang.String

---

##### `natIpInput`<sup>Optional</sup> <a name="natIpInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIpInput"></a>

```java
public java.lang.String getNatIpInput();
```

- *Type:* java.lang.String

---

##### `networkTierInput`<sup>Optional</sup> <a name="networkTierInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTierInput"></a>

```java
public java.lang.String getNetworkTierInput();
```

- *Type:* java.lang.String

---

##### `natIp`<sup>Required</sup> <a name="natIp" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIp"></a>

```java
public java.lang.String getNatIp();
```

- *Type:* java.lang.String

---

##### `networkTier`<sup>Required</sup> <a name="networkTier" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTier"></a>

```java
public java.lang.String getNetworkTier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig">GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig</a>

---


### GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList <a name="GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList;

new GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.get"></a>

```java
public GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange">GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange">GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange</a>>

---


### GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference <a name="GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference;

new GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resetSubnetworkRangeName">resetSubnetworkRangeName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubnetworkRangeName` <a name="resetSubnetworkRangeName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resetSubnetworkRangeName"></a>

```java
public void resetSubnetworkRangeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRangeInput">ipCidrRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeNameInput">subnetworkRangeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName">subnetworkRangeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange">GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipCidrRangeInput`<sup>Optional</sup> <a name="ipCidrRangeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRangeInput"></a>

```java
public java.lang.String getIpCidrRangeInput();
```

- *Type:* java.lang.String

---

##### `subnetworkRangeNameInput`<sup>Optional</sup> <a name="subnetworkRangeNameInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeNameInput"></a>

```java
public java.lang.String getSubnetworkRangeNameInput();
```

- *Type:* java.lang.String

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

---

##### `subnetworkRangeName`<sup>Required</sup> <a name="subnetworkRangeName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName"></a>

```java
public java.lang.String getSubnetworkRangeName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange">GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange</a>

---


### GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList <a name="GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList;

new GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get"></a>

```java
public GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig">GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig">GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>>

---


### GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference <a name="GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference;

new GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6">externalIpv6</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength">externalIpv6PrefixLength</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName">publicPtrDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTierInput">networkTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier">networkTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig">GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `externalIpv6`<sup>Required</sup> <a name="externalIpv6" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6"></a>

```java
public java.lang.String getExternalIpv6();
```

- *Type:* java.lang.String

---

##### `externalIpv6PrefixLength`<sup>Required</sup> <a name="externalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength"></a>

```java
public java.lang.String getExternalIpv6PrefixLength();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `publicPtrDomainName`<sup>Required</sup> <a name="publicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName"></a>

```java
public java.lang.String getPublicPtrDomainName();
```

- *Type:* java.lang.String

---

##### `networkTierInput`<sup>Optional</sup> <a name="networkTierInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTierInput"></a>

```java
public java.lang.String getNetworkTierInput();
```

- *Type:* java.lang.String

---

##### `networkTier`<sup>Required</sup> <a name="networkTier" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier"></a>

```java
public java.lang.String getNetworkTier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig">GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>

---


### GoogleComputeRegionInstanceTemplateNetworkInterfaceList <a name="GoogleComputeRegionInstanceTemplateNetworkInterfaceList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateNetworkInterfaceList;

new GoogleComputeRegionInstanceTemplateNetworkInterfaceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.get"></a>

```java
public GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface">GoogleComputeRegionInstanceTemplateNetworkInterface</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface">GoogleComputeRegionInstanceTemplateNetworkInterface</a>>

---


### GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference <a name="GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference;

new GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.putAccessConfig">putAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.putAliasIpRange">putAliasIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.putIpv6AccessConfig">putIpv6AccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetAccessConfig">resetAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetAliasIpRange">resetAliasIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetInternalIpv6PrefixLength">resetInternalIpv6PrefixLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetIpv6AccessConfig">resetIpv6AccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetIpv6Address">resetIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetNetworkIp">resetNetworkIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetNicType">resetNicType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetQueueCount">resetQueueCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetStackType">resetStackType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetSubnetworkProject">resetSubnetworkProject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessConfig` <a name="putAccessConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.putAccessConfig"></a>

```java
public void putAccessConfig(IResolvable OR java.util.List<GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.putAccessConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig">GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig</a>>

---

##### `putAliasIpRange` <a name="putAliasIpRange" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.putAliasIpRange"></a>

```java
public void putAliasIpRange(IResolvable OR java.util.List<GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.putAliasIpRange.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange">GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange</a>>

---

##### `putIpv6AccessConfig` <a name="putIpv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.putIpv6AccessConfig"></a>

```java
public void putIpv6AccessConfig(IResolvable OR java.util.List<GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.putIpv6AccessConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig">GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>>

---

##### `resetAccessConfig` <a name="resetAccessConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetAccessConfig"></a>

```java
public void resetAccessConfig()
```

##### `resetAliasIpRange` <a name="resetAliasIpRange" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetAliasIpRange"></a>

```java
public void resetAliasIpRange()
```

##### `resetInternalIpv6PrefixLength` <a name="resetInternalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetInternalIpv6PrefixLength"></a>

```java
public void resetInternalIpv6PrefixLength()
```

##### `resetIpv6AccessConfig` <a name="resetIpv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetIpv6AccessConfig"></a>

```java
public void resetIpv6AccessConfig()
```

##### `resetIpv6Address` <a name="resetIpv6Address" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetIpv6Address"></a>

```java
public void resetIpv6Address()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetNetworkIp` <a name="resetNetworkIp" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetNetworkIp"></a>

```java
public void resetNetworkIp()
```

##### `resetNicType` <a name="resetNicType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetNicType"></a>

```java
public void resetNicType()
```

##### `resetQueueCount` <a name="resetQueueCount" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetQueueCount"></a>

```java
public void resetQueueCount()
```

##### `resetStackType` <a name="resetStackType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetStackType"></a>

```java
public void resetStackType()
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetSubnetwork"></a>

```java
public void resetSubnetwork()
```

##### `resetSubnetworkProject` <a name="resetSubnetworkProject" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetSubnetworkProject"></a>

```java
public void resetSubnetworkProject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.accessConfig">accessConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList">GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRange">aliasIpRange</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList">GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfig">ipv6AccessConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList">GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessType">ipv6AccessType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.accessConfigInput">accessConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig">GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRangeInput">aliasIpRangeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange">GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLengthInput">internalIpv6PrefixLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfigInput">ipv6AccessConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig">GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AddressInput">ipv6AddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.networkIpInput">networkIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.nicTypeInput">nicTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.queueCountInput">queueCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.stackTypeInput">stackTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkInput">subnetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProjectInput">subnetworkProjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLength">internalIpv6PrefixLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6Address">ipv6Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.networkIp">networkIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.nicType">nicType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.queueCount">queueCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.stackType">stackType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProject">subnetworkProject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface">GoogleComputeRegionInstanceTemplateNetworkInterface</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessConfig`<sup>Required</sup> <a name="accessConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.accessConfig"></a>

```java
public GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList getAccessConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList">GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList</a>

---

##### `aliasIpRange`<sup>Required</sup> <a name="aliasIpRange" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRange"></a>

```java
public GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList getAliasIpRange();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList">GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList</a>

---

##### `ipv6AccessConfig`<sup>Required</sup> <a name="ipv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfig"></a>

```java
public GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList getIpv6AccessConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList">GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList</a>

---

##### `ipv6AccessType`<sup>Required</sup> <a name="ipv6AccessType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessType"></a>

```java
public java.lang.String getIpv6AccessType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `accessConfigInput`<sup>Optional</sup> <a name="accessConfigInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.accessConfigInput"></a>

```java
public java.lang.Object getAccessConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig">GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig</a>>

---

##### `aliasIpRangeInput`<sup>Optional</sup> <a name="aliasIpRangeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRangeInput"></a>

```java
public java.lang.Object getAliasIpRangeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange">GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange</a>>

---

##### `internalIpv6PrefixLengthInput`<sup>Optional</sup> <a name="internalIpv6PrefixLengthInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLengthInput"></a>

```java
public java.lang.Number getInternalIpv6PrefixLengthInput();
```

- *Type:* java.lang.Number

---

##### `ipv6AccessConfigInput`<sup>Optional</sup> <a name="ipv6AccessConfigInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfigInput"></a>

```java
public java.lang.Object getIpv6AccessConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig">GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>>

---

##### `ipv6AddressInput`<sup>Optional</sup> <a name="ipv6AddressInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AddressInput"></a>

```java
public java.lang.String getIpv6AddressInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `networkIpInput`<sup>Optional</sup> <a name="networkIpInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.networkIpInput"></a>

```java
public java.lang.String getNetworkIpInput();
```

- *Type:* java.lang.String

---

##### `nicTypeInput`<sup>Optional</sup> <a name="nicTypeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.nicTypeInput"></a>

```java
public java.lang.String getNicTypeInput();
```

- *Type:* java.lang.String

---

##### `queueCountInput`<sup>Optional</sup> <a name="queueCountInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.queueCountInput"></a>

```java
public java.lang.Number getQueueCountInput();
```

- *Type:* java.lang.Number

---

##### `stackTypeInput`<sup>Optional</sup> <a name="stackTypeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.stackTypeInput"></a>

```java
public java.lang.String getStackTypeInput();
```

- *Type:* java.lang.String

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkInput"></a>

```java
public java.lang.String getSubnetworkInput();
```

- *Type:* java.lang.String

---

##### `subnetworkProjectInput`<sup>Optional</sup> <a name="subnetworkProjectInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProjectInput"></a>

```java
public java.lang.String getSubnetworkProjectInput();
```

- *Type:* java.lang.String

---

##### `internalIpv6PrefixLength`<sup>Required</sup> <a name="internalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLength"></a>

```java
public java.lang.Number getInternalIpv6PrefixLength();
```

- *Type:* java.lang.Number

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6Address"></a>

```java
public java.lang.String getIpv6Address();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `networkIp`<sup>Required</sup> <a name="networkIp" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.networkIp"></a>

```java
public java.lang.String getNetworkIp();
```

- *Type:* java.lang.String

---

##### `nicType`<sup>Required</sup> <a name="nicType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.nicType"></a>

```java
public java.lang.String getNicType();
```

- *Type:* java.lang.String

---

##### `queueCount`<sup>Required</sup> <a name="queueCount" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.queueCount"></a>

```java
public java.lang.Number getQueueCount();
```

- *Type:* java.lang.Number

---

##### `stackType`<sup>Required</sup> <a name="stackType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.stackType"></a>

```java
public java.lang.String getStackType();
```

- *Type:* java.lang.String

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

---

##### `subnetworkProject`<sup>Required</sup> <a name="subnetworkProject" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProject"></a>

```java
public java.lang.String getSubnetworkProject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface">GoogleComputeRegionInstanceTemplateNetworkInterface</a>

---


### GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference <a name="GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference;

new GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTierInput">totalEgressBandwidthTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier">totalEgressBandwidthTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig">GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `totalEgressBandwidthTierInput`<sup>Optional</sup> <a name="totalEgressBandwidthTierInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTierInput"></a>

```java
public java.lang.String getTotalEgressBandwidthTierInput();
```

- *Type:* java.lang.String

---

##### `totalEgressBandwidthTier`<sup>Required</sup> <a name="totalEgressBandwidthTier" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier"></a>

```java
public java.lang.String getTotalEgressBandwidthTier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig">GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig</a>

---


### GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference <a name="GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference;

new GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.putSpecificReservation">putSpecificReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.resetSpecificReservation">resetSpecificReservation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSpecificReservation` <a name="putSpecificReservation" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.putSpecificReservation"></a>

```java
public void putSpecificReservation(GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.putSpecificReservation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation">GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation</a>

---

##### `resetSpecificReservation` <a name="resetSpecificReservation" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.resetSpecificReservation"></a>

```java
public void resetSpecificReservation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.specificReservation">specificReservation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference">GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.specificReservationInput">specificReservationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation">GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinity">GoogleComputeRegionInstanceTemplateReservationAffinity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `specificReservation`<sup>Required</sup> <a name="specificReservation" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.specificReservation"></a>

```java
public GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference getSpecificReservation();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference">GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference</a>

---

##### `specificReservationInput`<sup>Optional</sup> <a name="specificReservationInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.specificReservationInput"></a>

```java
public GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation getSpecificReservationInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation">GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionInstanceTemplateReservationAffinity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinity">GoogleComputeRegionInstanceTemplateReservationAffinity</a>

---


### GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference <a name="GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference;

new GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation">GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation">GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation</a>

---


### GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference <a name="GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference;

new GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.resetNanos"></a>

```java
public void resetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration">GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration">GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration</a>

---


### GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference <a name="GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference;

new GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.putMaxDuration">putMaxDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.resetMaxDuration">resetMaxDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMaxDuration` <a name="putMaxDuration" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.putMaxDuration"></a>

```java
public void putMaxDuration(GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.putMaxDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration">GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration</a>

---

##### `resetMaxDuration` <a name="resetMaxDuration" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.resetMaxDuration"></a>

```java
public void resetMaxDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.maxDuration">maxDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference">GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.maxDurationInput">maxDurationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration">GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown">GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxDuration`<sup>Required</sup> <a name="maxDuration" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.maxDuration"></a>

```java
public GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference getMaxDuration();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference">GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxDurationInput`<sup>Optional</sup> <a name="maxDurationInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.maxDurationInput"></a>

```java
public GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration getMaxDurationInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration">GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown">GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown</a>

---


### GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList <a name="GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList;

new GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get"></a>

```java
public GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout">GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout">GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>>

---


### GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference <a name="GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference;

new GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resetNanos"></a>

```java
public void resetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout">GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout">GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>

---


### GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference <a name="GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference;

new GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.resetNanos"></a>

```java
public void resetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration">GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration">GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration</a>

---


### GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList <a name="GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList;

new GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.get"></a>

```java
public GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities">GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities">GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities</a>>

---


### GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference <a name="GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference;

new GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities">GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities">GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities</a>

---


### GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference <a name="GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference;

new GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resetDiscardLocalSsd">resetDiscardLocalSsd</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiscardLocalSsd` <a name="resetDiscardLocalSsd" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resetDiscardLocalSsd"></a>

```java
public void resetDiscardLocalSsd()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsdInput">discardLocalSsdInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsd">discardLocalSsd</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction">GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `discardLocalSsdInput`<sup>Optional</sup> <a name="discardLocalSsdInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsdInput"></a>

```java
public java.lang.Object getDiscardLocalSsdInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `discardLocalSsd`<sup>Required</sup> <a name="discardLocalSsd" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsd"></a>

```java
public java.lang.Object getDiscardLocalSsd();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction">GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction</a>

---


### GoogleComputeRegionInstanceTemplateSchedulingOutputReference <a name="GoogleComputeRegionInstanceTemplateSchedulingOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateSchedulingOutputReference;

new GoogleComputeRegionInstanceTemplateSchedulingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.putGracefulShutdown">putGracefulShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.putLocalSsdRecoveryTimeout">putLocalSsdRecoveryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.putMaxRunDuration">putMaxRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.putNodeAffinities">putNodeAffinities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.putOnInstanceStopAction">putOnInstanceStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetAutomaticRestart">resetAutomaticRestart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetGracefulShutdown">resetGracefulShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetHostErrorTimeoutSeconds">resetHostErrorTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetInstanceTerminationAction">resetInstanceTerminationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetLocalSsdRecoveryTimeout">resetLocalSsdRecoveryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetMaintenanceInterval">resetMaintenanceInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetMaxRunDuration">resetMaxRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetMinNodeCpus">resetMinNodeCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetNodeAffinities">resetNodeAffinities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetOnHostMaintenance">resetOnHostMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetOnInstanceStopAction">resetOnInstanceStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetPreemptible">resetPreemptible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetProvisioningModel">resetProvisioningModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetTerminationTime">resetTerminationTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGracefulShutdown` <a name="putGracefulShutdown" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.putGracefulShutdown"></a>

```java
public void putGracefulShutdown(GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.putGracefulShutdown.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown">GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown</a>

---

##### `putLocalSsdRecoveryTimeout` <a name="putLocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.putLocalSsdRecoveryTimeout"></a>

```java
public void putLocalSsdRecoveryTimeout(IResolvable OR java.util.List<GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.putLocalSsdRecoveryTimeout.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout">GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>>

---

##### `putMaxRunDuration` <a name="putMaxRunDuration" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.putMaxRunDuration"></a>

```java
public void putMaxRunDuration(GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.putMaxRunDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration">GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration</a>

---

##### `putNodeAffinities` <a name="putNodeAffinities" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.putNodeAffinities"></a>

```java
public void putNodeAffinities(IResolvable OR java.util.List<GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.putNodeAffinities.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities">GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities</a>>

---

##### `putOnInstanceStopAction` <a name="putOnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.putOnInstanceStopAction"></a>

```java
public void putOnInstanceStopAction(GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.putOnInstanceStopAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction">GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction</a>

---

##### `resetAutomaticRestart` <a name="resetAutomaticRestart" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetAutomaticRestart"></a>

```java
public void resetAutomaticRestart()
```

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetAvailabilityDomain"></a>

```java
public void resetAvailabilityDomain()
```

##### `resetGracefulShutdown` <a name="resetGracefulShutdown" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetGracefulShutdown"></a>

```java
public void resetGracefulShutdown()
```

##### `resetHostErrorTimeoutSeconds` <a name="resetHostErrorTimeoutSeconds" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetHostErrorTimeoutSeconds"></a>

```java
public void resetHostErrorTimeoutSeconds()
```

##### `resetInstanceTerminationAction` <a name="resetInstanceTerminationAction" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetInstanceTerminationAction"></a>

```java
public void resetInstanceTerminationAction()
```

##### `resetLocalSsdRecoveryTimeout` <a name="resetLocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetLocalSsdRecoveryTimeout"></a>

```java
public void resetLocalSsdRecoveryTimeout()
```

##### `resetMaintenanceInterval` <a name="resetMaintenanceInterval" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetMaintenanceInterval"></a>

```java
public void resetMaintenanceInterval()
```

##### `resetMaxRunDuration` <a name="resetMaxRunDuration" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetMaxRunDuration"></a>

```java
public void resetMaxRunDuration()
```

##### `resetMinNodeCpus` <a name="resetMinNodeCpus" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetMinNodeCpus"></a>

```java
public void resetMinNodeCpus()
```

##### `resetNodeAffinities` <a name="resetNodeAffinities" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetNodeAffinities"></a>

```java
public void resetNodeAffinities()
```

##### `resetOnHostMaintenance` <a name="resetOnHostMaintenance" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetOnHostMaintenance"></a>

```java
public void resetOnHostMaintenance()
```

##### `resetOnInstanceStopAction` <a name="resetOnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetOnInstanceStopAction"></a>

```java
public void resetOnInstanceStopAction()
```

##### `resetPreemptible` <a name="resetPreemptible" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetPreemptible"></a>

```java
public void resetPreemptible()
```

##### `resetProvisioningModel` <a name="resetProvisioningModel" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetProvisioningModel"></a>

```java
public void resetProvisioningModel()
```

##### `resetTerminationTime` <a name="resetTerminationTime" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetTerminationTime"></a>

```java
public void resetTerminationTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.gracefulShutdown">gracefulShutdown</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference">GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeout">localSsdRecoveryTimeout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList">GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.maxRunDuration">maxRunDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference">GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.nodeAffinities">nodeAffinities</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList">GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.onInstanceStopAction">onInstanceStopAction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference">GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.automaticRestartInput">automaticRestartInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.gracefulShutdownInput">gracefulShutdownInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown">GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.hostErrorTimeoutSecondsInput">hostErrorTimeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.instanceTerminationActionInput">instanceTerminationActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeoutInput">localSsdRecoveryTimeoutInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout">GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.maintenanceIntervalInput">maintenanceIntervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.maxRunDurationInput">maxRunDurationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration">GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.minNodeCpusInput">minNodeCpusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.nodeAffinitiesInput">nodeAffinitiesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities">GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.onHostMaintenanceInput">onHostMaintenanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.onInstanceStopActionInput">onInstanceStopActionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction">GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.preemptibleInput">preemptibleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.provisioningModelInput">provisioningModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.terminationTimeInput">terminationTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.automaticRestart">automaticRestart</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.hostErrorTimeoutSeconds">hostErrorTimeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.instanceTerminationAction">instanceTerminationAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.maintenanceInterval">maintenanceInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.minNodeCpus">minNodeCpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.onHostMaintenance">onHostMaintenance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.preemptible">preemptible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.provisioningModel">provisioningModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.terminationTime">terminationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling">GoogleComputeRegionInstanceTemplateScheduling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gracefulShutdown`<sup>Required</sup> <a name="gracefulShutdown" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.gracefulShutdown"></a>

```java
public GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference getGracefulShutdown();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference">GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference</a>

---

##### `localSsdRecoveryTimeout`<sup>Required</sup> <a name="localSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeout"></a>

```java
public GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList getLocalSsdRecoveryTimeout();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList">GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList</a>

---

##### `maxRunDuration`<sup>Required</sup> <a name="maxRunDuration" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.maxRunDuration"></a>

```java
public GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference getMaxRunDuration();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference">GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference</a>

---

##### `nodeAffinities`<sup>Required</sup> <a name="nodeAffinities" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.nodeAffinities"></a>

```java
public GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList getNodeAffinities();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList">GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList</a>

---

##### `onInstanceStopAction`<sup>Required</sup> <a name="onInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.onInstanceStopAction"></a>

```java
public GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference getOnInstanceStopAction();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference">GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference</a>

---

##### `automaticRestartInput`<sup>Optional</sup> <a name="automaticRestartInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.automaticRestartInput"></a>

```java
public java.lang.Object getAutomaticRestartInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.availabilityDomainInput"></a>

```java
public java.lang.Number getAvailabilityDomainInput();
```

- *Type:* java.lang.Number

---

##### `gracefulShutdownInput`<sup>Optional</sup> <a name="gracefulShutdownInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.gracefulShutdownInput"></a>

```java
public GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown getGracefulShutdownInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown">GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown</a>

---

##### `hostErrorTimeoutSecondsInput`<sup>Optional</sup> <a name="hostErrorTimeoutSecondsInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.hostErrorTimeoutSecondsInput"></a>

```java
public java.lang.Number getHostErrorTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `instanceTerminationActionInput`<sup>Optional</sup> <a name="instanceTerminationActionInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.instanceTerminationActionInput"></a>

```java
public java.lang.String getInstanceTerminationActionInput();
```

- *Type:* java.lang.String

---

##### `localSsdRecoveryTimeoutInput`<sup>Optional</sup> <a name="localSsdRecoveryTimeoutInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeoutInput"></a>

```java
public java.lang.Object getLocalSsdRecoveryTimeoutInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout">GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>>

---

##### `maintenanceIntervalInput`<sup>Optional</sup> <a name="maintenanceIntervalInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.maintenanceIntervalInput"></a>

```java
public java.lang.String getMaintenanceIntervalInput();
```

- *Type:* java.lang.String

---

##### `maxRunDurationInput`<sup>Optional</sup> <a name="maxRunDurationInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.maxRunDurationInput"></a>

```java
public GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration getMaxRunDurationInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration">GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration</a>

---

##### `minNodeCpusInput`<sup>Optional</sup> <a name="minNodeCpusInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.minNodeCpusInput"></a>

```java
public java.lang.Number getMinNodeCpusInput();
```

- *Type:* java.lang.Number

---

##### `nodeAffinitiesInput`<sup>Optional</sup> <a name="nodeAffinitiesInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.nodeAffinitiesInput"></a>

```java
public java.lang.Object getNodeAffinitiesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities">GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities</a>>

---

##### `onHostMaintenanceInput`<sup>Optional</sup> <a name="onHostMaintenanceInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.onHostMaintenanceInput"></a>

```java
public java.lang.String getOnHostMaintenanceInput();
```

- *Type:* java.lang.String

---

##### `onInstanceStopActionInput`<sup>Optional</sup> <a name="onInstanceStopActionInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.onInstanceStopActionInput"></a>

```java
public GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction getOnInstanceStopActionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction">GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction</a>

---

##### `preemptibleInput`<sup>Optional</sup> <a name="preemptibleInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.preemptibleInput"></a>

```java
public java.lang.Object getPreemptibleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `provisioningModelInput`<sup>Optional</sup> <a name="provisioningModelInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.provisioningModelInput"></a>

```java
public java.lang.String getProvisioningModelInput();
```

- *Type:* java.lang.String

---

##### `terminationTimeInput`<sup>Optional</sup> <a name="terminationTimeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.terminationTimeInput"></a>

```java
public java.lang.String getTerminationTimeInput();
```

- *Type:* java.lang.String

---

##### `automaticRestart`<sup>Required</sup> <a name="automaticRestart" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.automaticRestart"></a>

```java
public java.lang.Object getAutomaticRestart();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.availabilityDomain"></a>

```java
public java.lang.Number getAvailabilityDomain();
```

- *Type:* java.lang.Number

---

##### `hostErrorTimeoutSeconds`<sup>Required</sup> <a name="hostErrorTimeoutSeconds" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.hostErrorTimeoutSeconds"></a>

```java
public java.lang.Number getHostErrorTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `instanceTerminationAction`<sup>Required</sup> <a name="instanceTerminationAction" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.instanceTerminationAction"></a>

```java
public java.lang.String getInstanceTerminationAction();
```

- *Type:* java.lang.String

---

##### `maintenanceInterval`<sup>Required</sup> <a name="maintenanceInterval" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.maintenanceInterval"></a>

```java
public java.lang.String getMaintenanceInterval();
```

- *Type:* java.lang.String

---

##### `minNodeCpus`<sup>Required</sup> <a name="minNodeCpus" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.minNodeCpus"></a>

```java
public java.lang.Number getMinNodeCpus();
```

- *Type:* java.lang.Number

---

##### `onHostMaintenance`<sup>Required</sup> <a name="onHostMaintenance" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.onHostMaintenance"></a>

```java
public java.lang.String getOnHostMaintenance();
```

- *Type:* java.lang.String

---

##### `preemptible`<sup>Required</sup> <a name="preemptible" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.preemptible"></a>

```java
public java.lang.Object getPreemptible();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `provisioningModel`<sup>Required</sup> <a name="provisioningModel" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.provisioningModel"></a>

```java
public java.lang.String getProvisioningModel();
```

- *Type:* java.lang.String

---

##### `terminationTime`<sup>Required</sup> <a name="terminationTime" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.terminationTime"></a>

```java
public java.lang.String getTerminationTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionInstanceTemplateScheduling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling">GoogleComputeRegionInstanceTemplateScheduling</a>

---


### GoogleComputeRegionInstanceTemplateServiceAccountOutputReference <a name="GoogleComputeRegionInstanceTemplateServiceAccountOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference;

new GoogleComputeRegionInstanceTemplateServiceAccountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.resetEmail">resetEmail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.resetEmail"></a>

```java
public void resetEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccount">GoogleComputeRegionInstanceTemplateServiceAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionInstanceTemplateServiceAccount getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccount">GoogleComputeRegionInstanceTemplateServiceAccount</a>

---


### GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference <a name="GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference;

new GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">resetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableSecureBoot">resetEnableSecureBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableVtpm">resetEnableVtpm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableIntegrityMonitoring` <a name="resetEnableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```java
public void resetEnableIntegrityMonitoring()
```

##### `resetEnableSecureBoot` <a name="resetEnableSecureBoot" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```java
public void resetEnableSecureBoot()
```

##### `resetEnableVtpm` <a name="resetEnableVtpm" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```java
public void resetEnableVtpm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">enableIntegrityMonitoringInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enableSecureBootInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpmInput">enableVtpmInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBoot">enableSecureBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpm">enableVtpm</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfig">GoogleComputeRegionInstanceTemplateShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableIntegrityMonitoringInput`<sup>Optional</sup> <a name="enableIntegrityMonitoringInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```java
public java.lang.Object getEnableIntegrityMonitoringInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableSecureBootInput`<sup>Optional</sup> <a name="enableSecureBootInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```java
public java.lang.Object getEnableSecureBootInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableVtpmInput`<sup>Optional</sup> <a name="enableVtpmInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```java
public java.lang.Object getEnableVtpmInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableIntegrityMonitoring`<sup>Required</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```java
public java.lang.Object getEnableIntegrityMonitoring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableSecureBoot`<sup>Required</sup> <a name="enableSecureBoot" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```java
public java.lang.Object getEnableSecureBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableVtpm`<sup>Required</sup> <a name="enableVtpm" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```java
public java.lang.Object getEnableVtpm();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionInstanceTemplateShieldedInstanceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfig">GoogleComputeRegionInstanceTemplateShieldedInstanceConfig</a>

---


### GoogleComputeRegionInstanceTemplateTimeoutsOutputReference <a name="GoogleComputeRegionInstanceTemplateTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_instance_template.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference;

new GoogleComputeRegionInstanceTemplateTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeouts">GoogleComputeRegionInstanceTemplateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeouts">GoogleComputeRegionInstanceTemplateTimeouts</a>

---



