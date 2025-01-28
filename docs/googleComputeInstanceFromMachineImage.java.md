# `googleComputeInstanceFromMachineImage` Submodule <a name="`googleComputeInstanceFromMachineImage` Submodule" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeInstanceFromMachineImage <a name="GoogleComputeInstanceFromMachineImage" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image google_compute_instance_from_machine_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImage;

GoogleComputeInstanceFromMachineImage.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .sourceMachineImage(java.lang.String)
//  .advancedMachineFeatures(GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures)
//  .allowStoppingForUpdate(java.lang.Boolean)
//  .allowStoppingForUpdate(IResolvable)
//  .canIpForward(java.lang.Boolean)
//  .canIpForward(IResolvable)
//  .confidentialInstanceConfig(GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig)
//  .deletionProtection(java.lang.Boolean)
//  .deletionProtection(IResolvable)
//  .description(java.lang.String)
//  .desiredStatus(java.lang.String)
//  .enableDisplay(java.lang.Boolean)
//  .enableDisplay(IResolvable)
//  .guestAccelerator(IResolvable)
//  .guestAccelerator(java.util.List<GoogleComputeInstanceFromMachineImageGuestAccelerator>)
//  .hostname(java.lang.String)
//  .id(java.lang.String)
//  .keyRevocationActionType(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .machineType(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .metadataStartupScript(java.lang.String)
//  .minCpuPlatform(java.lang.String)
//  .networkInterface(IResolvable)
//  .networkInterface(java.util.List<GoogleComputeInstanceFromMachineImageNetworkInterface>)
//  .networkPerformanceConfig(GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig)
//  .params(GoogleComputeInstanceFromMachineImageParams)
//  .partnerMetadata(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .reservationAffinity(GoogleComputeInstanceFromMachineImageReservationAffinity)
//  .resourcePolicies(java.util.List<java.lang.String>)
//  .scheduling(GoogleComputeInstanceFromMachineImageScheduling)
//  .serviceAccount(GoogleComputeInstanceFromMachineImageServiceAccount)
//  .shieldedInstanceConfig(GoogleComputeInstanceFromMachineImageShieldedInstanceConfig)
//  .tags(java.util.List<java.lang.String>)
//  .timeouts(GoogleComputeInstanceFromMachineImageTimeouts)
//  .zone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the instance. One of name or self_link must be provided. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.sourceMachineImage">sourceMachineImage</a></code> | <code>java.lang.String</code> | Name or self link of a machine image to create the instance from on. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.advancedMachineFeatures">advancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures">GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures</a></code> | advanced_machine_features block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.allowStoppingForUpdate">allowStoppingForUpdate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, allows Terraform to stop the instance to update its properties. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.canIpForward">canIpForward</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether sending and receiving of packets with non-matching source or destination IPs is allowed. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.confidentialInstanceConfig">confidentialInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig">GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig</a></code> | confidential_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether deletion protection is enabled on this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A brief description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.desiredStatus">desiredStatus</a></code> | <code>java.lang.String</code> | Desired status of the instance. Either "RUNNING", "SUSPENDED" or "TERMINATED". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.enableDisplay">enableDisplay</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the instance has virtual displays enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.guestAccelerator">guestAccelerator</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAccelerator">GoogleComputeInstanceFromMachineImageGuestAccelerator</a>></code> | guest_accelerator block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.hostname">hostname</a></code> | <code>java.lang.String</code> | A custom hostname for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#id GoogleComputeInstanceFromMachineImage#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.keyRevocationActionType">keyRevocationActionType</a></code> | <code>java.lang.String</code> | Action to be taken when a customer's encryption key is revoked. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value label pairs assigned to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.machineType">machineType</a></code> | <code>java.lang.String</code> | The machine type to create. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Metadata key/value pairs made available within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.metadataStartupScript">metadataStartupScript</a></code> | <code>java.lang.String</code> | Metadata startup scripts made available within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.minCpuPlatform">minCpuPlatform</a></code> | <code>java.lang.String</code> | The minimum CPU platform specified for the VM instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.networkInterface">networkInterface</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface">GoogleComputeInstanceFromMachineImageNetworkInterface</a>></code> | network_interface block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.networkPerformanceConfig">networkPerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig">GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig</a></code> | network_performance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.params">params</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParams">GoogleComputeInstanceFromMachineImageParams</a></code> | params block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.partnerMetadata">partnerMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Partner Metadata Map made available within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.reservationAffinity">reservationAffinity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinity">GoogleComputeInstanceFromMachineImageReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.resourcePolicies">resourcePolicies</a></code> | <code>java.util.List<java.lang.String></code> | A list of self_links of resource policies to attach to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling">GoogleComputeInstanceFromMachineImageScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.serviceAccount">serviceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccount">GoogleComputeInstanceFromMachineImageServiceAccount</a></code> | service_account block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfig">GoogleComputeInstanceFromMachineImageShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | The list of tags attached to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeouts">GoogleComputeInstanceFromMachineImageTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | The zone of the instance. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the instance. One of name or self_link must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#name GoogleComputeInstanceFromMachineImage#name}

---

##### `sourceMachineImage`<sup>Required</sup> <a name="sourceMachineImage" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.sourceMachineImage"></a>

- *Type:* java.lang.String

Name or self link of a machine image to create the instance from on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#source_machine_image GoogleComputeInstanceFromMachineImage#source_machine_image}

---

##### `advancedMachineFeatures`<sup>Optional</sup> <a name="advancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.advancedMachineFeatures"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures">GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures</a>

advanced_machine_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#advanced_machine_features GoogleComputeInstanceFromMachineImage#advanced_machine_features}

---

##### `allowStoppingForUpdate`<sup>Optional</sup> <a name="allowStoppingForUpdate" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.allowStoppingForUpdate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, allows Terraform to stop the instance to update its properties.

If you try to update a property that requires stopping the instance without setting this field, the update will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#allow_stopping_for_update GoogleComputeInstanceFromMachineImage#allow_stopping_for_update}

---

##### `canIpForward`<sup>Optional</sup> <a name="canIpForward" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.canIpForward"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether sending and receiving of packets with non-matching source or destination IPs is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#can_ip_forward GoogleComputeInstanceFromMachineImage#can_ip_forward}

---

##### `confidentialInstanceConfig`<sup>Optional</sup> <a name="confidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.confidentialInstanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig">GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig</a>

confidential_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#confidential_instance_config GoogleComputeInstanceFromMachineImage#confidential_instance_config}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.deletionProtection"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether deletion protection is enabled on this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#deletion_protection GoogleComputeInstanceFromMachineImage#deletion_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A brief description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#description GoogleComputeInstanceFromMachineImage#description}

---

##### `desiredStatus`<sup>Optional</sup> <a name="desiredStatus" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.desiredStatus"></a>

- *Type:* java.lang.String

Desired status of the instance. Either "RUNNING", "SUSPENDED" or "TERMINATED".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#desired_status GoogleComputeInstanceFromMachineImage#desired_status}

---

##### `enableDisplay`<sup>Optional</sup> <a name="enableDisplay" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.enableDisplay"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the instance has virtual displays enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#enable_display GoogleComputeInstanceFromMachineImage#enable_display}

---

##### `guestAccelerator`<sup>Optional</sup> <a name="guestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.guestAccelerator"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAccelerator">GoogleComputeInstanceFromMachineImageGuestAccelerator</a>>

guest_accelerator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#guest_accelerator GoogleComputeInstanceFromMachineImage#guest_accelerator}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.hostname"></a>

- *Type:* java.lang.String

A custom hostname for the instance.

Must be a fully qualified DNS name and RFC-1035-valid. Valid format is a series of labels 1-63 characters long matching the regular expression [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D), concatenated with periods. The entire hostname must not exceed 253 characters. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#hostname GoogleComputeInstanceFromMachineImage#hostname}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#id GoogleComputeInstanceFromMachineImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyRevocationActionType`<sup>Optional</sup> <a name="keyRevocationActionType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.keyRevocationActionType"></a>

- *Type:* java.lang.String

Action to be taken when a customer's encryption key is revoked.

Supports "STOP" and "NONE", with "NONE" being the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#key_revocation_action_type GoogleComputeInstanceFromMachineImage#key_revocation_action_type}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value label pairs assigned to the instance.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#labels GoogleComputeInstanceFromMachineImage#labels}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.machineType"></a>

- *Type:* java.lang.String

The machine type to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#machine_type GoogleComputeInstanceFromMachineImage#machine_type}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.metadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Metadata key/value pairs made available within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#metadata GoogleComputeInstanceFromMachineImage#metadata}

---

##### `metadataStartupScript`<sup>Optional</sup> <a name="metadataStartupScript" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.metadataStartupScript"></a>

- *Type:* java.lang.String

Metadata startup scripts made available within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#metadata_startup_script GoogleComputeInstanceFromMachineImage#metadata_startup_script}

---

##### `minCpuPlatform`<sup>Optional</sup> <a name="minCpuPlatform" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.minCpuPlatform"></a>

- *Type:* java.lang.String

The minimum CPU platform specified for the VM instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#min_cpu_platform GoogleComputeInstanceFromMachineImage#min_cpu_platform}

---

##### `networkInterface`<sup>Optional</sup> <a name="networkInterface" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.networkInterface"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface">GoogleComputeInstanceFromMachineImageNetworkInterface</a>>

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#network_interface GoogleComputeInstanceFromMachineImage#network_interface}

---

##### `networkPerformanceConfig`<sup>Optional</sup> <a name="networkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.networkPerformanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig">GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig</a>

network_performance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#network_performance_config GoogleComputeInstanceFromMachineImage#network_performance_config}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.params"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParams">GoogleComputeInstanceFromMachineImageParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#params GoogleComputeInstanceFromMachineImage#params}

---

##### `partnerMetadata`<sup>Optional</sup> <a name="partnerMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.partnerMetadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Partner Metadata Map made available within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#partner_metadata GoogleComputeInstanceFromMachineImage#partner_metadata}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

If self_link is provided, this value is ignored. If neither self_link nor project are provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#project GoogleComputeInstanceFromMachineImage#project}

---

##### `reservationAffinity`<sup>Optional</sup> <a name="reservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.reservationAffinity"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinity">GoogleComputeInstanceFromMachineImageReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#reservation_affinity GoogleComputeInstanceFromMachineImage#reservation_affinity}

---

##### `resourcePolicies`<sup>Optional</sup> <a name="resourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.resourcePolicies"></a>

- *Type:* java.util.List<java.lang.String>

A list of self_links of resource policies to attach to the instance.

Currently a max of 1 resource policy is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#resource_policies GoogleComputeInstanceFromMachineImage#resource_policies}

---

##### `scheduling`<sup>Optional</sup> <a name="scheduling" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.scheduling"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling">GoogleComputeInstanceFromMachineImageScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#scheduling GoogleComputeInstanceFromMachineImage#scheduling}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.serviceAccount"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccount">GoogleComputeInstanceFromMachineImageServiceAccount</a>

service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#service_account GoogleComputeInstanceFromMachineImage#service_account}

---

##### `shieldedInstanceConfig`<sup>Optional</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.shieldedInstanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfig">GoogleComputeInstanceFromMachineImageShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#shielded_instance_config GoogleComputeInstanceFromMachineImage#shielded_instance_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

The list of tags attached to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#tags GoogleComputeInstanceFromMachineImage#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeouts">GoogleComputeInstanceFromMachineImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#timeouts GoogleComputeInstanceFromMachineImage#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

The zone of the instance.

If self_link is provided, this value is ignored. If neither self_link nor zone are provided, the provider zone is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#zone GoogleComputeInstanceFromMachineImage#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putAdvancedMachineFeatures">putAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putConfidentialInstanceConfig">putConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putGuestAccelerator">putGuestAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putNetworkInterface">putNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putNetworkPerformanceConfig">putNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putParams">putParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putReservationAffinity">putReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putScheduling">putScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putServiceAccount">putServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putShieldedInstanceConfig">putShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetAdvancedMachineFeatures">resetAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetAllowStoppingForUpdate">resetAllowStoppingForUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetCanIpForward">resetCanIpForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetConfidentialInstanceConfig">resetConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetDesiredStatus">resetDesiredStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetEnableDisplay">resetEnableDisplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetGuestAccelerator">resetGuestAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetKeyRevocationActionType">resetKeyRevocationActionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetMetadataStartupScript">resetMetadataStartupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetMinCpuPlatform">resetMinCpuPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetNetworkInterface">resetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetNetworkPerformanceConfig">resetNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetParams">resetParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetPartnerMetadata">resetPartnerMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetReservationAffinity">resetReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetResourcePolicies">resetResourcePolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetScheduling">resetScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetShieldedInstanceConfig">resetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdvancedMachineFeatures` <a name="putAdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putAdvancedMachineFeatures"></a>

```java
public void putAdvancedMachineFeatures(GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putAdvancedMachineFeatures.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures">GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures</a>

---

##### `putConfidentialInstanceConfig` <a name="putConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putConfidentialInstanceConfig"></a>

```java
public void putConfidentialInstanceConfig(GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putConfidentialInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig">GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig</a>

---

##### `putGuestAccelerator` <a name="putGuestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putGuestAccelerator"></a>

```java
public void putGuestAccelerator(IResolvable OR java.util.List<GoogleComputeInstanceFromMachineImageGuestAccelerator> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putGuestAccelerator.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAccelerator">GoogleComputeInstanceFromMachineImageGuestAccelerator</a>>

---

##### `putNetworkInterface` <a name="putNetworkInterface" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putNetworkInterface"></a>

```java
public void putNetworkInterface(IResolvable OR java.util.List<GoogleComputeInstanceFromMachineImageNetworkInterface> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putNetworkInterface.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface">GoogleComputeInstanceFromMachineImageNetworkInterface</a>>

---

##### `putNetworkPerformanceConfig` <a name="putNetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putNetworkPerformanceConfig"></a>

```java
public void putNetworkPerformanceConfig(GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putNetworkPerformanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig">GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig</a>

---

##### `putParams` <a name="putParams" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putParams"></a>

```java
public void putParams(GoogleComputeInstanceFromMachineImageParams value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParams">GoogleComputeInstanceFromMachineImageParams</a>

---

##### `putReservationAffinity` <a name="putReservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putReservationAffinity"></a>

```java
public void putReservationAffinity(GoogleComputeInstanceFromMachineImageReservationAffinity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putReservationAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinity">GoogleComputeInstanceFromMachineImageReservationAffinity</a>

---

##### `putScheduling` <a name="putScheduling" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putScheduling"></a>

```java
public void putScheduling(GoogleComputeInstanceFromMachineImageScheduling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putScheduling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling">GoogleComputeInstanceFromMachineImageScheduling</a>

---

##### `putServiceAccount` <a name="putServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putServiceAccount"></a>

```java
public void putServiceAccount(GoogleComputeInstanceFromMachineImageServiceAccount value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putServiceAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccount">GoogleComputeInstanceFromMachineImageServiceAccount</a>

---

##### `putShieldedInstanceConfig` <a name="putShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putShieldedInstanceConfig"></a>

```java
public void putShieldedInstanceConfig(GoogleComputeInstanceFromMachineImageShieldedInstanceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfig">GoogleComputeInstanceFromMachineImageShieldedInstanceConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeInstanceFromMachineImageTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeouts">GoogleComputeInstanceFromMachineImageTimeouts</a>

---

##### `resetAdvancedMachineFeatures` <a name="resetAdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetAdvancedMachineFeatures"></a>

```java
public void resetAdvancedMachineFeatures()
```

##### `resetAllowStoppingForUpdate` <a name="resetAllowStoppingForUpdate" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetAllowStoppingForUpdate"></a>

```java
public void resetAllowStoppingForUpdate()
```

##### `resetCanIpForward` <a name="resetCanIpForward" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetCanIpForward"></a>

```java
public void resetCanIpForward()
```

##### `resetConfidentialInstanceConfig` <a name="resetConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetConfidentialInstanceConfig"></a>

```java
public void resetConfidentialInstanceConfig()
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDesiredStatus` <a name="resetDesiredStatus" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetDesiredStatus"></a>

```java
public void resetDesiredStatus()
```

##### `resetEnableDisplay` <a name="resetEnableDisplay" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetEnableDisplay"></a>

```java
public void resetEnableDisplay()
```

##### `resetGuestAccelerator` <a name="resetGuestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetGuestAccelerator"></a>

```java
public void resetGuestAccelerator()
```

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetHostname"></a>

```java
public void resetHostname()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetId"></a>

```java
public void resetId()
```

##### `resetKeyRevocationActionType` <a name="resetKeyRevocationActionType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetKeyRevocationActionType"></a>

```java
public void resetKeyRevocationActionType()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetMachineType"></a>

```java
public void resetMachineType()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetMetadataStartupScript` <a name="resetMetadataStartupScript" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetMetadataStartupScript"></a>

```java
public void resetMetadataStartupScript()
```

##### `resetMinCpuPlatform` <a name="resetMinCpuPlatform" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetMinCpuPlatform"></a>

```java
public void resetMinCpuPlatform()
```

##### `resetNetworkInterface` <a name="resetNetworkInterface" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetNetworkInterface"></a>

```java
public void resetNetworkInterface()
```

##### `resetNetworkPerformanceConfig` <a name="resetNetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetNetworkPerformanceConfig"></a>

```java
public void resetNetworkPerformanceConfig()
```

##### `resetParams` <a name="resetParams" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetParams"></a>

```java
public void resetParams()
```

##### `resetPartnerMetadata` <a name="resetPartnerMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetPartnerMetadata"></a>

```java
public void resetPartnerMetadata()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetProject"></a>

```java
public void resetProject()
```

##### `resetReservationAffinity` <a name="resetReservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetReservationAffinity"></a>

```java
public void resetReservationAffinity()
```

##### `resetResourcePolicies` <a name="resetResourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetResourcePolicies"></a>

```java
public void resetResourcePolicies()
```

##### `resetScheduling` <a name="resetScheduling" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetScheduling"></a>

```java
public void resetScheduling()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```

##### `resetShieldedInstanceConfig` <a name="resetShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetShieldedInstanceConfig"></a>

```java
public void resetShieldedInstanceConfig()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetZone"></a>

```java
public void resetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeInstanceFromMachineImage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImage;

GoogleComputeInstanceFromMachineImage.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImage;

GoogleComputeInstanceFromMachineImage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImage;

GoogleComputeInstanceFromMachineImage.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImage;

GoogleComputeInstanceFromMachineImage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeInstanceFromMachineImage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleComputeInstanceFromMachineImage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeInstanceFromMachineImage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeInstanceFromMachineImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeInstanceFromMachineImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.advancedMachineFeatures">advancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference">GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.attachedDisk">attachedDisk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList">GoogleComputeInstanceFromMachineImageAttachedDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.bootDisk">bootDisk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList">GoogleComputeInstanceFromMachineImageBootDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.confidentialInstanceConfig">confidentialInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference">GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.cpuPlatform">cpuPlatform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.currentStatus">currentStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.guestAccelerator">guestAccelerator</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList">GoogleComputeInstanceFromMachineImageGuestAcceleratorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.labelFingerprint">labelFingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.metadataFingerprint">metadataFingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.networkInterface">networkInterface</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList">GoogleComputeInstanceFromMachineImageNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.networkPerformanceConfig">networkPerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference">GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.params">params</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference">GoogleComputeInstanceFromMachineImageParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.reservationAffinity">reservationAffinity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference">GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference">GoogleComputeInstanceFromMachineImageSchedulingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.scratchDisk">scratchDisk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList">GoogleComputeInstanceFromMachineImageScratchDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.serviceAccount">serviceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference">GoogleComputeInstanceFromMachineImageServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference">GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.tagsFingerprint">tagsFingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference">GoogleComputeInstanceFromMachineImageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.advancedMachineFeaturesInput">advancedMachineFeaturesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures">GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.allowStoppingForUpdateInput">allowStoppingForUpdateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.canIpForwardInput">canIpForwardInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.confidentialInstanceConfigInput">confidentialInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig">GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.desiredStatusInput">desiredStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.enableDisplayInput">enableDisplayInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.guestAcceleratorInput">guestAcceleratorInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAccelerator">GoogleComputeInstanceFromMachineImageGuestAccelerator</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.keyRevocationActionTypeInput">keyRevocationActionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.machineTypeInput">machineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.metadataStartupScriptInput">metadataStartupScriptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.minCpuPlatformInput">minCpuPlatformInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.networkInterfaceInput">networkInterfaceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface">GoogleComputeInstanceFromMachineImageNetworkInterface</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.networkPerformanceConfigInput">networkPerformanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig">GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.paramsInput">paramsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParams">GoogleComputeInstanceFromMachineImageParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.partnerMetadataInput">partnerMetadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.reservationAffinityInput">reservationAffinityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinity">GoogleComputeInstanceFromMachineImageReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.resourcePoliciesInput">resourcePoliciesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.schedulingInput">schedulingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling">GoogleComputeInstanceFromMachineImageScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.serviceAccountInput">serviceAccountInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccount">GoogleComputeInstanceFromMachineImageServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.shieldedInstanceConfigInput">shieldedInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfig">GoogleComputeInstanceFromMachineImageShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.sourceMachineImageInput">sourceMachineImageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeouts">GoogleComputeInstanceFromMachineImageTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.allowStoppingForUpdate">allowStoppingForUpdate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.canIpForward">canIpForward</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.desiredStatus">desiredStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.enableDisplay">enableDisplay</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.keyRevocationActionType">keyRevocationActionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.metadataStartupScript">metadataStartupScript</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.minCpuPlatform">minCpuPlatform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.partnerMetadata">partnerMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.resourcePolicies">resourcePolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.sourceMachineImage">sourceMachineImage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `advancedMachineFeatures`<sup>Required</sup> <a name="advancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.advancedMachineFeatures"></a>

```java
public GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference getAdvancedMachineFeatures();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference">GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference</a>

---

##### `attachedDisk`<sup>Required</sup> <a name="attachedDisk" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.attachedDisk"></a>

```java
public GoogleComputeInstanceFromMachineImageAttachedDiskList getAttachedDisk();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList">GoogleComputeInstanceFromMachineImageAttachedDiskList</a>

---

##### `bootDisk`<sup>Required</sup> <a name="bootDisk" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.bootDisk"></a>

```java
public GoogleComputeInstanceFromMachineImageBootDiskList getBootDisk();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList">GoogleComputeInstanceFromMachineImageBootDiskList</a>

---

##### `confidentialInstanceConfig`<sup>Required</sup> <a name="confidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.confidentialInstanceConfig"></a>

```java
public GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference getConfidentialInstanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference">GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference</a>

---

##### `cpuPlatform`<sup>Required</sup> <a name="cpuPlatform" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.cpuPlatform"></a>

```java
public java.lang.String getCpuPlatform();
```

- *Type:* java.lang.String

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `currentStatus`<sup>Required</sup> <a name="currentStatus" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.currentStatus"></a>

```java
public java.lang.String getCurrentStatus();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `guestAccelerator`<sup>Required</sup> <a name="guestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.guestAccelerator"></a>

```java
public GoogleComputeInstanceFromMachineImageGuestAcceleratorList getGuestAccelerator();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList">GoogleComputeInstanceFromMachineImageGuestAcceleratorList</a>

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `labelFingerprint`<sup>Required</sup> <a name="labelFingerprint" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.labelFingerprint"></a>

```java
public java.lang.String getLabelFingerprint();
```

- *Type:* java.lang.String

---

##### `metadataFingerprint`<sup>Required</sup> <a name="metadataFingerprint" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.metadataFingerprint"></a>

```java
public java.lang.String getMetadataFingerprint();
```

- *Type:* java.lang.String

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.networkInterface"></a>

```java
public GoogleComputeInstanceFromMachineImageNetworkInterfaceList getNetworkInterface();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList">GoogleComputeInstanceFromMachineImageNetworkInterfaceList</a>

---

##### `networkPerformanceConfig`<sup>Required</sup> <a name="networkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.networkPerformanceConfig"></a>

```java
public GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference getNetworkPerformanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference">GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference</a>

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.params"></a>

```java
public GoogleComputeInstanceFromMachineImageParamsOutputReference getParams();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference">GoogleComputeInstanceFromMachineImageParamsOutputReference</a>

---

##### `reservationAffinity`<sup>Required</sup> <a name="reservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.reservationAffinity"></a>

```java
public GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference getReservationAffinity();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference">GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference</a>

---

##### `scheduling`<sup>Required</sup> <a name="scheduling" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.scheduling"></a>

```java
public GoogleComputeInstanceFromMachineImageSchedulingOutputReference getScheduling();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference">GoogleComputeInstanceFromMachineImageSchedulingOutputReference</a>

---

##### `scratchDisk`<sup>Required</sup> <a name="scratchDisk" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.scratchDisk"></a>

```java
public GoogleComputeInstanceFromMachineImageScratchDiskList getScratchDisk();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList">GoogleComputeInstanceFromMachineImageScratchDiskList</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.serviceAccount"></a>

```java
public GoogleComputeInstanceFromMachineImageServiceAccountOutputReference getServiceAccount();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference">GoogleComputeInstanceFromMachineImageServiceAccountOutputReference</a>

---

##### `shieldedInstanceConfig`<sup>Required</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.shieldedInstanceConfig"></a>

```java
public GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference getShieldedInstanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference">GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference</a>

---

##### `tagsFingerprint`<sup>Required</sup> <a name="tagsFingerprint" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.tagsFingerprint"></a>

```java
public java.lang.String getTagsFingerprint();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.timeouts"></a>

```java
public GoogleComputeInstanceFromMachineImageTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference">GoogleComputeInstanceFromMachineImageTimeoutsOutputReference</a>

---

##### `advancedMachineFeaturesInput`<sup>Optional</sup> <a name="advancedMachineFeaturesInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.advancedMachineFeaturesInput"></a>

```java
public GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures getAdvancedMachineFeaturesInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures">GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures</a>

---

##### `allowStoppingForUpdateInput`<sup>Optional</sup> <a name="allowStoppingForUpdateInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.allowStoppingForUpdateInput"></a>

```java
public java.lang.Object getAllowStoppingForUpdateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `canIpForwardInput`<sup>Optional</sup> <a name="canIpForwardInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.canIpForwardInput"></a>

```java
public java.lang.Object getCanIpForwardInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `confidentialInstanceConfigInput`<sup>Optional</sup> <a name="confidentialInstanceConfigInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.confidentialInstanceConfigInput"></a>

```java
public GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig getConfidentialInstanceConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig">GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig</a>

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.deletionProtectionInput"></a>

```java
public java.lang.Object getDeletionProtectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `desiredStatusInput`<sup>Optional</sup> <a name="desiredStatusInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.desiredStatusInput"></a>

```java
public java.lang.String getDesiredStatusInput();
```

- *Type:* java.lang.String

---

##### `enableDisplayInput`<sup>Optional</sup> <a name="enableDisplayInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.enableDisplayInput"></a>

```java
public java.lang.Object getEnableDisplayInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `guestAcceleratorInput`<sup>Optional</sup> <a name="guestAcceleratorInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.guestAcceleratorInput"></a>

```java
public java.lang.Object getGuestAcceleratorInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAccelerator">GoogleComputeInstanceFromMachineImageGuestAccelerator</a>>

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyRevocationActionTypeInput`<sup>Optional</sup> <a name="keyRevocationActionTypeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.keyRevocationActionTypeInput"></a>

```java
public java.lang.String getKeyRevocationActionTypeInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.machineTypeInput"></a>

```java
public java.lang.String getMachineTypeInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `metadataStartupScriptInput`<sup>Optional</sup> <a name="metadataStartupScriptInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.metadataStartupScriptInput"></a>

```java
public java.lang.String getMetadataStartupScriptInput();
```

- *Type:* java.lang.String

---

##### `minCpuPlatformInput`<sup>Optional</sup> <a name="minCpuPlatformInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.minCpuPlatformInput"></a>

```java
public java.lang.String getMinCpuPlatformInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInterfaceInput`<sup>Optional</sup> <a name="networkInterfaceInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.networkInterfaceInput"></a>

```java
public java.lang.Object getNetworkInterfaceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface">GoogleComputeInstanceFromMachineImageNetworkInterface</a>>

---

##### `networkPerformanceConfigInput`<sup>Optional</sup> <a name="networkPerformanceConfigInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.networkPerformanceConfigInput"></a>

```java
public GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig getNetworkPerformanceConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig">GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig</a>

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.paramsInput"></a>

```java
public GoogleComputeInstanceFromMachineImageParams getParamsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParams">GoogleComputeInstanceFromMachineImageParams</a>

---

##### `partnerMetadataInput`<sup>Optional</sup> <a name="partnerMetadataInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.partnerMetadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPartnerMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `reservationAffinityInput`<sup>Optional</sup> <a name="reservationAffinityInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.reservationAffinityInput"></a>

```java
public GoogleComputeInstanceFromMachineImageReservationAffinity getReservationAffinityInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinity">GoogleComputeInstanceFromMachineImageReservationAffinity</a>

---

##### `resourcePoliciesInput`<sup>Optional</sup> <a name="resourcePoliciesInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.resourcePoliciesInput"></a>

```java
public java.util.List<java.lang.String> getResourcePoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `schedulingInput`<sup>Optional</sup> <a name="schedulingInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.schedulingInput"></a>

```java
public GoogleComputeInstanceFromMachineImageScheduling getSchedulingInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling">GoogleComputeInstanceFromMachineImageScheduling</a>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.serviceAccountInput"></a>

```java
public GoogleComputeInstanceFromMachineImageServiceAccount getServiceAccountInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccount">GoogleComputeInstanceFromMachineImageServiceAccount</a>

---

##### `shieldedInstanceConfigInput`<sup>Optional</sup> <a name="shieldedInstanceConfigInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.shieldedInstanceConfigInput"></a>

```java
public GoogleComputeInstanceFromMachineImageShieldedInstanceConfig getShieldedInstanceConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfig">GoogleComputeInstanceFromMachineImageShieldedInstanceConfig</a>

---

##### `sourceMachineImageInput`<sup>Optional</sup> <a name="sourceMachineImageInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.sourceMachineImageInput"></a>

```java
public java.lang.String getSourceMachineImageInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeouts">GoogleComputeInstanceFromMachineImageTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `allowStoppingForUpdate`<sup>Required</sup> <a name="allowStoppingForUpdate" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.allowStoppingForUpdate"></a>

```java
public java.lang.Object getAllowStoppingForUpdate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `canIpForward`<sup>Required</sup> <a name="canIpForward" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.canIpForward"></a>

```java
public java.lang.Object getCanIpForward();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.deletionProtection"></a>

```java
public java.lang.Object getDeletionProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `desiredStatus`<sup>Required</sup> <a name="desiredStatus" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.desiredStatus"></a>

```java
public java.lang.String getDesiredStatus();
```

- *Type:* java.lang.String

---

##### `enableDisplay`<sup>Required</sup> <a name="enableDisplay" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.enableDisplay"></a>

```java
public java.lang.Object getEnableDisplay();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyRevocationActionType`<sup>Required</sup> <a name="keyRevocationActionType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.keyRevocationActionType"></a>

```java
public java.lang.String getKeyRevocationActionType();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `metadataStartupScript`<sup>Required</sup> <a name="metadataStartupScript" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.metadataStartupScript"></a>

```java
public java.lang.String getMetadataStartupScript();
```

- *Type:* java.lang.String

---

##### `minCpuPlatform`<sup>Required</sup> <a name="minCpuPlatform" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.minCpuPlatform"></a>

```java
public java.lang.String getMinCpuPlatform();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `partnerMetadata`<sup>Required</sup> <a name="partnerMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.partnerMetadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPartnerMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `resourcePolicies`<sup>Required</sup> <a name="resourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.resourcePolicies"></a>

```java
public java.util.List<java.lang.String> getResourcePolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceMachineImage`<sup>Required</sup> <a name="sourceMachineImage" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.sourceMachineImage"></a>

```java
public java.lang.String getSourceMachineImage();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures <a name="GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures;

GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures.builder()
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
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures.property.enableNestedVirtualization">enableNestedVirtualization</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to enable nested virtualization or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures.property.enableUefiNetworking">enableUefiNetworking</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to enable UEFI networking for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures.property.performanceMonitoringUnit">performanceMonitoringUnit</a></code> | <code>java.lang.String</code> | The PMU is a hardware component within the CPU core that monitors how the processor runs code. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures.property.threadsPerCore">threadsPerCore</a></code> | <code>java.lang.Number</code> | The number of threads per physical core. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures.property.turboMode">turboMode</a></code> | <code>java.lang.String</code> | Turbo frequency mode to use for the instance. Currently supported modes is "ALL_CORE_MAX". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures.property.visibleCoreCount">visibleCoreCount</a></code> | <code>java.lang.Number</code> | The number of physical cores to expose to an instance. |

---

##### `enableNestedVirtualization`<sup>Optional</sup> <a name="enableNestedVirtualization" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures.property.enableNestedVirtualization"></a>

```java
public java.lang.Object getEnableNestedVirtualization();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to enable nested virtualization or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#enable_nested_virtualization GoogleComputeInstanceFromMachineImage#enable_nested_virtualization}

---

##### `enableUefiNetworking`<sup>Optional</sup> <a name="enableUefiNetworking" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures.property.enableUefiNetworking"></a>

```java
public java.lang.Object getEnableUefiNetworking();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to enable UEFI networking for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#enable_uefi_networking GoogleComputeInstanceFromMachineImage#enable_uefi_networking}

---

##### `performanceMonitoringUnit`<sup>Optional</sup> <a name="performanceMonitoringUnit" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures.property.performanceMonitoringUnit"></a>

```java
public java.lang.String getPerformanceMonitoringUnit();
```

- *Type:* java.lang.String

The PMU is a hardware component within the CPU core that monitors how the processor runs code.

Valid values for the level of PMU are "STANDARD", "ENHANCED", and "ARCHITECTURAL".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#performance_monitoring_unit GoogleComputeInstanceFromMachineImage#performance_monitoring_unit}

---

##### `threadsPerCore`<sup>Optional</sup> <a name="threadsPerCore" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures.property.threadsPerCore"></a>

```java
public java.lang.Number getThreadsPerCore();
```

- *Type:* java.lang.Number

The number of threads per physical core.

To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#threads_per_core GoogleComputeInstanceFromMachineImage#threads_per_core}

---

##### `turboMode`<sup>Optional</sup> <a name="turboMode" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures.property.turboMode"></a>

```java
public java.lang.String getTurboMode();
```

- *Type:* java.lang.String

Turbo frequency mode to use for the instance. Currently supported modes is "ALL_CORE_MAX".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#turbo_mode GoogleComputeInstanceFromMachineImage#turbo_mode}

---

##### `visibleCoreCount`<sup>Optional</sup> <a name="visibleCoreCount" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures.property.visibleCoreCount"></a>

```java
public java.lang.Number getVisibleCoreCount();
```

- *Type:* java.lang.Number

The number of physical cores to expose to an instance.

Multiply by the number of threads per core to compute the total number of virtual CPUs to expose to the instance. If unset, the number of cores is inferred from the instance's nominal CPU count and the underlying platform's SMT width.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#visible_core_count GoogleComputeInstanceFromMachineImage#visible_core_count}

---

### GoogleComputeInstanceFromMachineImageAttachedDisk <a name="GoogleComputeInstanceFromMachineImageAttachedDisk" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageAttachedDisk;

GoogleComputeInstanceFromMachineImageAttachedDisk.builder()
    .build();
```


### GoogleComputeInstanceFromMachineImageBootDisk <a name="GoogleComputeInstanceFromMachineImageBootDisk" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageBootDisk;

GoogleComputeInstanceFromMachineImageBootDisk.builder()
    .build();
```


### GoogleComputeInstanceFromMachineImageBootDiskInitializeParams <a name="GoogleComputeInstanceFromMachineImageBootDiskInitializeParams" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParams.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageBootDiskInitializeParams;

GoogleComputeInstanceFromMachineImageBootDiskInitializeParams.builder()
    .build();
```


### GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig <a name="GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig;

GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig.builder()
//  .confidentialInstanceType(java.lang.String)
//  .enableConfidentialCompute(java.lang.Boolean)
//  .enableConfidentialCompute(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig.property.confidentialInstanceType">confidentialInstanceType</a></code> | <code>java.lang.String</code> | The confidential computing technology the instance uses. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig.property.enableConfidentialCompute">enableConfidentialCompute</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defines whether the instance should have confidential compute enabled. Field will be deprecated in a future release. |

---

##### `confidentialInstanceType`<sup>Optional</sup> <a name="confidentialInstanceType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig.property.confidentialInstanceType"></a>

```java
public java.lang.String getConfidentialInstanceType();
```

- *Type:* java.lang.String

The confidential computing technology the instance uses.

SEV is an AMD feature. TDX is an Intel feature. One of the following
values is required: SEV, SEV_SNP, TDX. If SEV_SNP, min_cpu_platform =
"AMD Milan" is currently required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#confidential_instance_type GoogleComputeInstanceFromMachineImage#confidential_instance_type}

---

##### `enableConfidentialCompute`<sup>Optional</sup> <a name="enableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig.property.enableConfidentialCompute"></a>

```java
public java.lang.Object getEnableConfidentialCompute();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defines whether the instance should have confidential compute enabled. Field will be deprecated in a future release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#enable_confidential_compute GoogleComputeInstanceFromMachineImage#enable_confidential_compute}

---

### GoogleComputeInstanceFromMachineImageConfig <a name="GoogleComputeInstanceFromMachineImageConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageConfig;

GoogleComputeInstanceFromMachineImageConfig.builder()
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
    .name(java.lang.String)
    .sourceMachineImage(java.lang.String)
//  .advancedMachineFeatures(GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures)
//  .allowStoppingForUpdate(java.lang.Boolean)
//  .allowStoppingForUpdate(IResolvable)
//  .canIpForward(java.lang.Boolean)
//  .canIpForward(IResolvable)
//  .confidentialInstanceConfig(GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig)
//  .deletionProtection(java.lang.Boolean)
//  .deletionProtection(IResolvable)
//  .description(java.lang.String)
//  .desiredStatus(java.lang.String)
//  .enableDisplay(java.lang.Boolean)
//  .enableDisplay(IResolvable)
//  .guestAccelerator(IResolvable)
//  .guestAccelerator(java.util.List<GoogleComputeInstanceFromMachineImageGuestAccelerator>)
//  .hostname(java.lang.String)
//  .id(java.lang.String)
//  .keyRevocationActionType(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .machineType(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .metadataStartupScript(java.lang.String)
//  .minCpuPlatform(java.lang.String)
//  .networkInterface(IResolvable)
//  .networkInterface(java.util.List<GoogleComputeInstanceFromMachineImageNetworkInterface>)
//  .networkPerformanceConfig(GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig)
//  .params(GoogleComputeInstanceFromMachineImageParams)
//  .partnerMetadata(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .reservationAffinity(GoogleComputeInstanceFromMachineImageReservationAffinity)
//  .resourcePolicies(java.util.List<java.lang.String>)
//  .scheduling(GoogleComputeInstanceFromMachineImageScheduling)
//  .serviceAccount(GoogleComputeInstanceFromMachineImageServiceAccount)
//  .shieldedInstanceConfig(GoogleComputeInstanceFromMachineImageShieldedInstanceConfig)
//  .tags(java.util.List<java.lang.String>)
//  .timeouts(GoogleComputeInstanceFromMachineImageTimeouts)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the instance. One of name or self_link must be provided. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.sourceMachineImage">sourceMachineImage</a></code> | <code>java.lang.String</code> | Name or self link of a machine image to create the instance from on. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.advancedMachineFeatures">advancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures">GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures</a></code> | advanced_machine_features block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.allowStoppingForUpdate">allowStoppingForUpdate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, allows Terraform to stop the instance to update its properties. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.canIpForward">canIpForward</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether sending and receiving of packets with non-matching source or destination IPs is allowed. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.confidentialInstanceConfig">confidentialInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig">GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig</a></code> | confidential_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether deletion protection is enabled on this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.description">description</a></code> | <code>java.lang.String</code> | A brief description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.desiredStatus">desiredStatus</a></code> | <code>java.lang.String</code> | Desired status of the instance. Either "RUNNING", "SUSPENDED" or "TERMINATED". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.enableDisplay">enableDisplay</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the instance has virtual displays enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.guestAccelerator">guestAccelerator</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAccelerator">GoogleComputeInstanceFromMachineImageGuestAccelerator</a>></code> | guest_accelerator block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.hostname">hostname</a></code> | <code>java.lang.String</code> | A custom hostname for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#id GoogleComputeInstanceFromMachineImage#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.keyRevocationActionType">keyRevocationActionType</a></code> | <code>java.lang.String</code> | Action to be taken when a customer's encryption key is revoked. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value label pairs assigned to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.machineType">machineType</a></code> | <code>java.lang.String</code> | The machine type to create. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Metadata key/value pairs made available within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.metadataStartupScript">metadataStartupScript</a></code> | <code>java.lang.String</code> | Metadata startup scripts made available within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.minCpuPlatform">minCpuPlatform</a></code> | <code>java.lang.String</code> | The minimum CPU platform specified for the VM instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.networkInterface">networkInterface</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface">GoogleComputeInstanceFromMachineImageNetworkInterface</a>></code> | network_interface block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.networkPerformanceConfig">networkPerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig">GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig</a></code> | network_performance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.params">params</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParams">GoogleComputeInstanceFromMachineImageParams</a></code> | params block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.partnerMetadata">partnerMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Partner Metadata Map made available within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.reservationAffinity">reservationAffinity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinity">GoogleComputeInstanceFromMachineImageReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.resourcePolicies">resourcePolicies</a></code> | <code>java.util.List<java.lang.String></code> | A list of self_links of resource policies to attach to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling">GoogleComputeInstanceFromMachineImageScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.serviceAccount">serviceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccount">GoogleComputeInstanceFromMachineImageServiceAccount</a></code> | service_account block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfig">GoogleComputeInstanceFromMachineImageShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | The list of tags attached to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeouts">GoogleComputeInstanceFromMachineImageTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | The zone of the instance. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the instance. One of name or self_link must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#name GoogleComputeInstanceFromMachineImage#name}

---

##### `sourceMachineImage`<sup>Required</sup> <a name="sourceMachineImage" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.sourceMachineImage"></a>

```java
public java.lang.String getSourceMachineImage();
```

- *Type:* java.lang.String

Name or self link of a machine image to create the instance from on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#source_machine_image GoogleComputeInstanceFromMachineImage#source_machine_image}

---

##### `advancedMachineFeatures`<sup>Optional</sup> <a name="advancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.advancedMachineFeatures"></a>

```java
public GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures getAdvancedMachineFeatures();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures">GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures</a>

advanced_machine_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#advanced_machine_features GoogleComputeInstanceFromMachineImage#advanced_machine_features}

---

##### `allowStoppingForUpdate`<sup>Optional</sup> <a name="allowStoppingForUpdate" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.allowStoppingForUpdate"></a>

```java
public java.lang.Object getAllowStoppingForUpdate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, allows Terraform to stop the instance to update its properties.

If you try to update a property that requires stopping the instance without setting this field, the update will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#allow_stopping_for_update GoogleComputeInstanceFromMachineImage#allow_stopping_for_update}

---

##### `canIpForward`<sup>Optional</sup> <a name="canIpForward" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.canIpForward"></a>

```java
public java.lang.Object getCanIpForward();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether sending and receiving of packets with non-matching source or destination IPs is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#can_ip_forward GoogleComputeInstanceFromMachineImage#can_ip_forward}

---

##### `confidentialInstanceConfig`<sup>Optional</sup> <a name="confidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.confidentialInstanceConfig"></a>

```java
public GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig getConfidentialInstanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig">GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig</a>

confidential_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#confidential_instance_config GoogleComputeInstanceFromMachineImage#confidential_instance_config}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.deletionProtection"></a>

```java
public java.lang.Object getDeletionProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether deletion protection is enabled on this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#deletion_protection GoogleComputeInstanceFromMachineImage#deletion_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A brief description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#description GoogleComputeInstanceFromMachineImage#description}

---

##### `desiredStatus`<sup>Optional</sup> <a name="desiredStatus" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.desiredStatus"></a>

```java
public java.lang.String getDesiredStatus();
```

- *Type:* java.lang.String

Desired status of the instance. Either "RUNNING", "SUSPENDED" or "TERMINATED".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#desired_status GoogleComputeInstanceFromMachineImage#desired_status}

---

##### `enableDisplay`<sup>Optional</sup> <a name="enableDisplay" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.enableDisplay"></a>

```java
public java.lang.Object getEnableDisplay();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the instance has virtual displays enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#enable_display GoogleComputeInstanceFromMachineImage#enable_display}

---

##### `guestAccelerator`<sup>Optional</sup> <a name="guestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.guestAccelerator"></a>

```java
public java.lang.Object getGuestAccelerator();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAccelerator">GoogleComputeInstanceFromMachineImageGuestAccelerator</a>>

guest_accelerator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#guest_accelerator GoogleComputeInstanceFromMachineImage#guest_accelerator}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

A custom hostname for the instance.

Must be a fully qualified DNS name and RFC-1035-valid. Valid format is a series of labels 1-63 characters long matching the regular expression [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D), concatenated with periods. The entire hostname must not exceed 253 characters. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#hostname GoogleComputeInstanceFromMachineImage#hostname}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#id GoogleComputeInstanceFromMachineImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyRevocationActionType`<sup>Optional</sup> <a name="keyRevocationActionType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.keyRevocationActionType"></a>

```java
public java.lang.String getKeyRevocationActionType();
```

- *Type:* java.lang.String

Action to be taken when a customer's encryption key is revoked.

Supports "STOP" and "NONE", with "NONE" being the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#key_revocation_action_type GoogleComputeInstanceFromMachineImage#key_revocation_action_type}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value label pairs assigned to the instance.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#labels GoogleComputeInstanceFromMachineImage#labels}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

The machine type to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#machine_type GoogleComputeInstanceFromMachineImage#machine_type}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Metadata key/value pairs made available within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#metadata GoogleComputeInstanceFromMachineImage#metadata}

---

##### `metadataStartupScript`<sup>Optional</sup> <a name="metadataStartupScript" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.metadataStartupScript"></a>

```java
public java.lang.String getMetadataStartupScript();
```

- *Type:* java.lang.String

Metadata startup scripts made available within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#metadata_startup_script GoogleComputeInstanceFromMachineImage#metadata_startup_script}

---

##### `minCpuPlatform`<sup>Optional</sup> <a name="minCpuPlatform" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.minCpuPlatform"></a>

```java
public java.lang.String getMinCpuPlatform();
```

- *Type:* java.lang.String

The minimum CPU platform specified for the VM instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#min_cpu_platform GoogleComputeInstanceFromMachineImage#min_cpu_platform}

---

##### `networkInterface`<sup>Optional</sup> <a name="networkInterface" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.networkInterface"></a>

```java
public java.lang.Object getNetworkInterface();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface">GoogleComputeInstanceFromMachineImageNetworkInterface</a>>

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#network_interface GoogleComputeInstanceFromMachineImage#network_interface}

---

##### `networkPerformanceConfig`<sup>Optional</sup> <a name="networkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.networkPerformanceConfig"></a>

```java
public GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig getNetworkPerformanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig">GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig</a>

network_performance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#network_performance_config GoogleComputeInstanceFromMachineImage#network_performance_config}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.params"></a>

```java
public GoogleComputeInstanceFromMachineImageParams getParams();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParams">GoogleComputeInstanceFromMachineImageParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#params GoogleComputeInstanceFromMachineImage#params}

---

##### `partnerMetadata`<sup>Optional</sup> <a name="partnerMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.partnerMetadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPartnerMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Partner Metadata Map made available within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#partner_metadata GoogleComputeInstanceFromMachineImage#partner_metadata}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

If self_link is provided, this value is ignored. If neither self_link nor project are provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#project GoogleComputeInstanceFromMachineImage#project}

---

##### `reservationAffinity`<sup>Optional</sup> <a name="reservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.reservationAffinity"></a>

```java
public GoogleComputeInstanceFromMachineImageReservationAffinity getReservationAffinity();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinity">GoogleComputeInstanceFromMachineImageReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#reservation_affinity GoogleComputeInstanceFromMachineImage#reservation_affinity}

---

##### `resourcePolicies`<sup>Optional</sup> <a name="resourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.resourcePolicies"></a>

```java
public java.util.List<java.lang.String> getResourcePolicies();
```

- *Type:* java.util.List<java.lang.String>

A list of self_links of resource policies to attach to the instance.

Currently a max of 1 resource policy is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#resource_policies GoogleComputeInstanceFromMachineImage#resource_policies}

---

##### `scheduling`<sup>Optional</sup> <a name="scheduling" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.scheduling"></a>

```java
public GoogleComputeInstanceFromMachineImageScheduling getScheduling();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling">GoogleComputeInstanceFromMachineImageScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#scheduling GoogleComputeInstanceFromMachineImage#scheduling}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.serviceAccount"></a>

```java
public GoogleComputeInstanceFromMachineImageServiceAccount getServiceAccount();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccount">GoogleComputeInstanceFromMachineImageServiceAccount</a>

service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#service_account GoogleComputeInstanceFromMachineImage#service_account}

---

##### `shieldedInstanceConfig`<sup>Optional</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.shieldedInstanceConfig"></a>

```java
public GoogleComputeInstanceFromMachineImageShieldedInstanceConfig getShieldedInstanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfig">GoogleComputeInstanceFromMachineImageShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#shielded_instance_config GoogleComputeInstanceFromMachineImage#shielded_instance_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

The list of tags attached to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#tags GoogleComputeInstanceFromMachineImage#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.timeouts"></a>

```java
public GoogleComputeInstanceFromMachineImageTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeouts">GoogleComputeInstanceFromMachineImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#timeouts GoogleComputeInstanceFromMachineImage#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

The zone of the instance.

If self_link is provided, this value is ignored. If neither self_link nor zone are provided, the provider zone is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#zone GoogleComputeInstanceFromMachineImage#zone}

---

### GoogleComputeInstanceFromMachineImageGuestAccelerator <a name="GoogleComputeInstanceFromMachineImageGuestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAccelerator.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageGuestAccelerator;

GoogleComputeInstanceFromMachineImageGuestAccelerator.builder()
    .count(java.lang.Number)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAccelerator.property.count">count</a></code> | <code>java.lang.Number</code> | The number of the guest accelerator cards exposed to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAccelerator.property.type">type</a></code> | <code>java.lang.String</code> | The accelerator type resource exposed to this instance. E.g. nvidia-tesla-k80. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAccelerator.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

The number of the guest accelerator cards exposed to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#count GoogleComputeInstanceFromMachineImage#count}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAccelerator.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The accelerator type resource exposed to this instance. E.g. nvidia-tesla-k80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#type GoogleComputeInstanceFromMachineImage#type}

---

### GoogleComputeInstanceFromMachineImageNetworkInterface <a name="GoogleComputeInstanceFromMachineImageNetworkInterface" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageNetworkInterface;

GoogleComputeInstanceFromMachineImageNetworkInterface.builder()
//  .accessConfig(IResolvable)
//  .accessConfig(java.util.List<GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig>)
//  .aliasIpRange(IResolvable)
//  .aliasIpRange(java.util.List<GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange>)
//  .internalIpv6PrefixLength(java.lang.Number)
//  .ipv6AccessConfig(IResolvable)
//  .ipv6AccessConfig(java.util.List<GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig>)
//  .ipv6Address(java.lang.String)
//  .network(java.lang.String)
//  .networkAttachment(java.lang.String)
//  .networkIp(java.lang.String)
//  .nicType(java.lang.String)
//  .queueCount(java.lang.Number)
//  .securityPolicy(java.lang.String)
//  .stackType(java.lang.String)
//  .subnetwork(java.lang.String)
//  .subnetworkProject(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.accessConfig">accessConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig">GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig</a>></code> | access_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.aliasIpRange">aliasIpRange</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange">GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange</a>></code> | alias_ip_range block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.internalIpv6PrefixLength">internalIpv6PrefixLength</a></code> | <code>java.lang.Number</code> | The prefix length of the primary internal IPv6 range. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.ipv6AccessConfig">ipv6AccessConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig">GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig</a>></code> | ipv6_access_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.ipv6Address">ipv6Address</a></code> | <code>java.lang.String</code> | An IPv6 internal network address for this network interface. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.network">network</a></code> | <code>java.lang.String</code> | The name or self_link of the network attached to this interface. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.networkAttachment">networkAttachment</a></code> | <code>java.lang.String</code> | The URL of the network attachment that this interface should connect to in the following format: projects/{projectNumber}/regions/{region_name}/networkAttachments/{network_attachment_name}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.networkIp">networkIp</a></code> | <code>java.lang.String</code> | The private IP address assigned to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.nicType">nicType</a></code> | <code>java.lang.String</code> | The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET, IDPF, MRDMA, and IRDMA. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.queueCount">queueCount</a></code> | <code>java.lang.Number</code> | The networking queue count that's specified by users for the network interface. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | A full or partial URL to a security policy to add to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.stackType">stackType</a></code> | <code>java.lang.String</code> | The stack type for this network interface to identify whether the IPv6 feature is enabled or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | The name or self_link of the subnetwork attached to this interface. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.subnetworkProject">subnetworkProject</a></code> | <code>java.lang.String</code> | The project in which the subnetwork belongs. |

---

##### `accessConfig`<sup>Optional</sup> <a name="accessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.accessConfig"></a>

```java
public java.lang.Object getAccessConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig">GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig</a>>

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#access_config GoogleComputeInstanceFromMachineImage#access_config}

---

##### `aliasIpRange`<sup>Optional</sup> <a name="aliasIpRange" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.aliasIpRange"></a>

```java
public java.lang.Object getAliasIpRange();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange">GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange</a>>

alias_ip_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#alias_ip_range GoogleComputeInstanceFromMachineImage#alias_ip_range}

---

##### `internalIpv6PrefixLength`<sup>Optional</sup> <a name="internalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.internalIpv6PrefixLength"></a>

```java
public java.lang.Number getInternalIpv6PrefixLength();
```

- *Type:* java.lang.Number

The prefix length of the primary internal IPv6 range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#internal_ipv6_prefix_length GoogleComputeInstanceFromMachineImage#internal_ipv6_prefix_length}

---

##### `ipv6AccessConfig`<sup>Optional</sup> <a name="ipv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.ipv6AccessConfig"></a>

```java
public java.lang.Object getIpv6AccessConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig">GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig</a>>

ipv6_access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#ipv6_access_config GoogleComputeInstanceFromMachineImage#ipv6_access_config}

---

##### `ipv6Address`<sup>Optional</sup> <a name="ipv6Address" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.ipv6Address"></a>

```java
public java.lang.String getIpv6Address();
```

- *Type:* java.lang.String

An IPv6 internal network address for this network interface.

If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#ipv6_address GoogleComputeInstanceFromMachineImage#ipv6_address}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The name or self_link of the network attached to this interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#network GoogleComputeInstanceFromMachineImage#network}

---

##### `networkAttachment`<sup>Optional</sup> <a name="networkAttachment" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.networkAttachment"></a>

```java
public java.lang.String getNetworkAttachment();
```

- *Type:* java.lang.String

The URL of the network attachment that this interface should connect to in the following format: projects/{projectNumber}/regions/{region_name}/networkAttachments/{network_attachment_name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#network_attachment GoogleComputeInstanceFromMachineImage#network_attachment}

---

##### `networkIp`<sup>Optional</sup> <a name="networkIp" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.networkIp"></a>

```java
public java.lang.String getNetworkIp();
```

- *Type:* java.lang.String

The private IP address assigned to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#network_ip GoogleComputeInstanceFromMachineImage#network_ip}

---

##### `nicType`<sup>Optional</sup> <a name="nicType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.nicType"></a>

```java
public java.lang.String getNicType();
```

- *Type:* java.lang.String

The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET, IDPF, MRDMA, and IRDMA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#nic_type GoogleComputeInstanceFromMachineImage#nic_type}

---

##### `queueCount`<sup>Optional</sup> <a name="queueCount" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.queueCount"></a>

```java
public java.lang.Number getQueueCount();
```

- *Type:* java.lang.Number

The networking queue count that's specified by users for the network interface.

Both Rx and Tx queues will be set to this number. It will be empty if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#queue_count GoogleComputeInstanceFromMachineImage#queue_count}

---

##### `securityPolicy`<sup>Optional</sup> <a name="securityPolicy" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.securityPolicy"></a>

```java
public java.lang.String getSecurityPolicy();
```

- *Type:* java.lang.String

A full or partial URL to a security policy to add to this instance.

If this field is set to an empty string it will remove the associated security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#security_policy GoogleComputeInstanceFromMachineImage#security_policy}

---

##### `stackType`<sup>Optional</sup> <a name="stackType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.stackType"></a>

```java
public java.lang.String getStackType();
```

- *Type:* java.lang.String

The stack type for this network interface to identify whether the IPv6 feature is enabled or not.

If not specified, IPV4_ONLY will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#stack_type GoogleComputeInstanceFromMachineImage#stack_type}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

The name or self_link of the subnetwork attached to this interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#subnetwork GoogleComputeInstanceFromMachineImage#subnetwork}

---

##### `subnetworkProject`<sup>Optional</sup> <a name="subnetworkProject" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.subnetworkProject"></a>

```java
public java.lang.String getSubnetworkProject();
```

- *Type:* java.lang.String

The project in which the subnetwork belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#subnetwork_project GoogleComputeInstanceFromMachineImage#subnetwork_project}

---

### GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig <a name="GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig;

GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig.builder()
//  .natIp(java.lang.String)
//  .networkTier(java.lang.String)
//  .publicPtrDomainName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig.property.natIp">natIp</a></code> | <code>java.lang.String</code> | The IP address that is be 1:1 mapped to the instance's network ip. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig.property.networkTier">networkTier</a></code> | <code>java.lang.String</code> | The networking tier used for configuring this instance. One of PREMIUM or STANDARD. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig.property.publicPtrDomainName">publicPtrDomainName</a></code> | <code>java.lang.String</code> | The DNS domain name for the public PTR record. |

---

##### `natIp`<sup>Optional</sup> <a name="natIp" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig.property.natIp"></a>

```java
public java.lang.String getNatIp();
```

- *Type:* java.lang.String

The IP address that is be 1:1 mapped to the instance's network ip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#nat_ip GoogleComputeInstanceFromMachineImage#nat_ip}

---

##### `networkTier`<sup>Optional</sup> <a name="networkTier" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig.property.networkTier"></a>

```java
public java.lang.String getNetworkTier();
```

- *Type:* java.lang.String

The networking tier used for configuring this instance. One of PREMIUM or STANDARD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#network_tier GoogleComputeInstanceFromMachineImage#network_tier}

---

##### `publicPtrDomainName`<sup>Optional</sup> <a name="publicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig.property.publicPtrDomainName"></a>

```java
public java.lang.String getPublicPtrDomainName();
```

- *Type:* java.lang.String

The DNS domain name for the public PTR record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#public_ptr_domain_name GoogleComputeInstanceFromMachineImage#public_ptr_domain_name}

---

### GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange <a name="GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange;

GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange.builder()
    .ipCidrRange(java.lang.String)
//  .subnetworkRangeName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | The IP CIDR range represented by this alias IP range. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange.property.subnetworkRangeName">subnetworkRangeName</a></code> | <code>java.lang.String</code> | The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range. |

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

The IP CIDR range represented by this alias IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#ip_cidr_range GoogleComputeInstanceFromMachineImage#ip_cidr_range}

---

##### `subnetworkRangeName`<sup>Optional</sup> <a name="subnetworkRangeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange.property.subnetworkRangeName"></a>

```java
public java.lang.String getSubnetworkRangeName();
```

- *Type:* java.lang.String

The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#subnetwork_range_name GoogleComputeInstanceFromMachineImage#subnetwork_range_name}

---

### GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig <a name="GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig;

GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig.builder()
    .networkTier(java.lang.String)
//  .externalIpv6(java.lang.String)
//  .externalIpv6PrefixLength(java.lang.String)
//  .name(java.lang.String)
//  .publicPtrDomainName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig.property.networkTier">networkTier</a></code> | <code>java.lang.String</code> | The service-level to be provided for IPv6 traffic when the subnet has an external subnet. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig.property.externalIpv6">externalIpv6</a></code> | <code>java.lang.String</code> | The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig.property.externalIpv6PrefixLength">externalIpv6PrefixLength</a></code> | <code>java.lang.String</code> | The prefix length of the external IPv6 range. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of this access configuration. In ipv6AccessConfigs, the recommended name is External IPv6. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig.property.publicPtrDomainName">publicPtrDomainName</a></code> | <code>java.lang.String</code> | The domain name to be used when creating DNSv6 records for the external IPv6 ranges. |

---

##### `networkTier`<sup>Required</sup> <a name="networkTier" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig.property.networkTier"></a>

```java
public java.lang.String getNetworkTier();
```

- *Type:* java.lang.String

The service-level to be provided for IPv6 traffic when the subnet has an external subnet.

Only PREMIUM tier is valid for IPv6

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#network_tier GoogleComputeInstanceFromMachineImage#network_tier}

---

##### `externalIpv6`<sup>Optional</sup> <a name="externalIpv6" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig.property.externalIpv6"></a>

```java
public java.lang.String getExternalIpv6();
```

- *Type:* java.lang.String

The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig.

To use a static external IP address, it must be unused and in the same region as the instance's zone. If not specified, Google Cloud will automatically assign an external IPv6 address from the instance's subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#external_ipv6 GoogleComputeInstanceFromMachineImage#external_ipv6}

---

##### `externalIpv6PrefixLength`<sup>Optional</sup> <a name="externalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig.property.externalIpv6PrefixLength"></a>

```java
public java.lang.String getExternalIpv6PrefixLength();
```

- *Type:* java.lang.String

The prefix length of the external IPv6 range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#external_ipv6_prefix_length GoogleComputeInstanceFromMachineImage#external_ipv6_prefix_length}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of this access configuration. In ipv6AccessConfigs, the recommended name is External IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#name GoogleComputeInstanceFromMachineImage#name}

---

##### `publicPtrDomainName`<sup>Optional</sup> <a name="publicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig.property.publicPtrDomainName"></a>

```java
public java.lang.String getPublicPtrDomainName();
```

- *Type:* java.lang.String

The domain name to be used when creating DNSv6 records for the external IPv6 ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#public_ptr_domain_name GoogleComputeInstanceFromMachineImage#public_ptr_domain_name}

---

### GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig <a name="GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig;

GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig.builder()
    .totalEgressBandwidthTier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig.property.totalEgressBandwidthTier">totalEgressBandwidthTier</a></code> | <code>java.lang.String</code> | The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT. |

---

##### `totalEgressBandwidthTier`<sup>Required</sup> <a name="totalEgressBandwidthTier" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig.property.totalEgressBandwidthTier"></a>

```java
public java.lang.String getTotalEgressBandwidthTier();
```

- *Type:* java.lang.String

The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#total_egress_bandwidth_tier GoogleComputeInstanceFromMachineImage#total_egress_bandwidth_tier}

---

### GoogleComputeInstanceFromMachineImageParams <a name="GoogleComputeInstanceFromMachineImageParams" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParams.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageParams;

GoogleComputeInstanceFromMachineImageParams.builder()
//  .resourceManagerTags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParams.property.resourceManagerTags">resourceManagerTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of resource manager tags. |

---

##### `resourceManagerTags`<sup>Optional</sup> <a name="resourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParams.property.resourceManagerTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#resource_manager_tags GoogleComputeInstanceFromMachineImage#resource_manager_tags}

---

### GoogleComputeInstanceFromMachineImageReservationAffinity <a name="GoogleComputeInstanceFromMachineImageReservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageReservationAffinity;

GoogleComputeInstanceFromMachineImageReservationAffinity.builder()
    .type(java.lang.String)
//  .specificReservation(GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinity.property.type">type</a></code> | <code>java.lang.String</code> | The type of reservation from which this instance can consume resources. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinity.property.specificReservation">specificReservation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation">GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation</a></code> | specific_reservation block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of reservation from which this instance can consume resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#type GoogleComputeInstanceFromMachineImage#type}

---

##### `specificReservation`<sup>Optional</sup> <a name="specificReservation" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinity.property.specificReservation"></a>

```java
public GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation getSpecificReservation();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation">GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation</a>

specific_reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#specific_reservation GoogleComputeInstanceFromMachineImage#specific_reservation}

---

### GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation <a name="GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation;

GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation.builder()
    .key(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation.property.key">key</a></code> | <code>java.lang.String</code> | Corresponds to the label key of a reservation resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Corresponds to the label values of a reservation resource. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Corresponds to the label key of a reservation resource.

To target a SPECIFIC_RESERVATION by name, specify compute.googleapis.com/reservation-name as the key and specify the name of your reservation as the only value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#key GoogleComputeInstanceFromMachineImage#key}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Corresponds to the label values of a reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#values GoogleComputeInstanceFromMachineImage#values}

---

### GoogleComputeInstanceFromMachineImageScheduling <a name="GoogleComputeInstanceFromMachineImageScheduling" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageScheduling;

GoogleComputeInstanceFromMachineImageScheduling.builder()
//  .automaticRestart(java.lang.Boolean)
//  .automaticRestart(IResolvable)
//  .availabilityDomain(java.lang.Number)
//  .hostErrorTimeoutSeconds(java.lang.Number)
//  .instanceTerminationAction(java.lang.String)
//  .localSsdRecoveryTimeout(GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout)
//  .maintenanceInterval(java.lang.String)
//  .maxRunDuration(GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration)
//  .minNodeCpus(java.lang.Number)
//  .nodeAffinities(IResolvable)
//  .nodeAffinities(java.util.List<GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities>)
//  .onHostMaintenance(java.lang.String)
//  .onInstanceStopAction(GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction)
//  .preemptible(java.lang.Boolean)
//  .preemptible(IResolvable)
//  .provisioningModel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.automaticRestart">automaticRestart</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies if the instance should be restarted if it was terminated by Compute Engine (not a user). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.Number</code> | Specifies the availability domain, which this instance should be scheduled on. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.hostErrorTimeoutSeconds">hostErrorTimeoutSeconds</a></code> | <code>java.lang.Number</code> | Specify the time in seconds for host error detection, the value must be within the range of [90, 330] with the increment of 30, if unset, the default behavior of host error recovery will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.instanceTerminationAction">instanceTerminationAction</a></code> | <code>java.lang.String</code> | Specifies the action GCE should take when SPOT VM is preempted. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.localSsdRecoveryTimeout">localSsdRecoveryTimeout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout</a></code> | local_ssd_recovery_timeout block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.maintenanceInterval">maintenanceInterval</a></code> | <code>java.lang.String</code> | Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.maxRunDuration">maxRunDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration">GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration</a></code> | max_run_duration block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.minNodeCpus">minNodeCpus</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#min_node_cpus GoogleComputeInstanceFromMachineImage#min_node_cpus}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.nodeAffinities">nodeAffinities</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities">GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities</a>></code> | node_affinities block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.onHostMaintenance">onHostMaintenance</a></code> | <code>java.lang.String</code> | Describes maintenance behavior for the instance. One of MIGRATE or TERMINATE,. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.onInstanceStopAction">onInstanceStopAction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction">GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction</a></code> | on_instance_stop_action block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.preemptible">preemptible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the instance is preemptible. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.provisioningModel">provisioningModel</a></code> | <code>java.lang.String</code> | Whether the instance is spot. If this is set as SPOT. |

---

##### `automaticRestart`<sup>Optional</sup> <a name="automaticRestart" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.automaticRestart"></a>

```java
public java.lang.Object getAutomaticRestart();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies if the instance should be restarted if it was terminated by Compute Engine (not a user).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#automatic_restart GoogleComputeInstanceFromMachineImage#automatic_restart}

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.availabilityDomain"></a>

```java
public java.lang.Number getAvailabilityDomain();
```

- *Type:* java.lang.Number

Specifies the availability domain, which this instance should be scheduled on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#availability_domain GoogleComputeInstanceFromMachineImage#availability_domain}

---

##### `hostErrorTimeoutSeconds`<sup>Optional</sup> <a name="hostErrorTimeoutSeconds" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.hostErrorTimeoutSeconds"></a>

```java
public java.lang.Number getHostErrorTimeoutSeconds();
```

- *Type:* java.lang.Number

Specify the time in seconds for host error detection, the value must be within the range of [90, 330] with the increment of 30, if unset, the default behavior of host error recovery will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#host_error_timeout_seconds GoogleComputeInstanceFromMachineImage#host_error_timeout_seconds}

---

##### `instanceTerminationAction`<sup>Optional</sup> <a name="instanceTerminationAction" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.instanceTerminationAction"></a>

```java
public java.lang.String getInstanceTerminationAction();
```

- *Type:* java.lang.String

Specifies the action GCE should take when SPOT VM is preempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#instance_termination_action GoogleComputeInstanceFromMachineImage#instance_termination_action}

---

##### `localSsdRecoveryTimeout`<sup>Optional</sup> <a name="localSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.localSsdRecoveryTimeout"></a>

```java
public GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout getLocalSsdRecoveryTimeout();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout</a>

local_ssd_recovery_timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#local_ssd_recovery_timeout GoogleComputeInstanceFromMachineImage#local_ssd_recovery_timeout}

---

##### `maintenanceInterval`<sup>Optional</sup> <a name="maintenanceInterval" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.maintenanceInterval"></a>

```java
public java.lang.String getMaintenanceInterval();
```

- *Type:* java.lang.String

Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#maintenance_interval GoogleComputeInstanceFromMachineImage#maintenance_interval}

---

##### `maxRunDuration`<sup>Optional</sup> <a name="maxRunDuration" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.maxRunDuration"></a>

```java
public GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration getMaxRunDuration();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration">GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration</a>

max_run_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#max_run_duration GoogleComputeInstanceFromMachineImage#max_run_duration}

---

##### `minNodeCpus`<sup>Optional</sup> <a name="minNodeCpus" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.minNodeCpus"></a>

```java
public java.lang.Number getMinNodeCpus();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#min_node_cpus GoogleComputeInstanceFromMachineImage#min_node_cpus}.

---

##### `nodeAffinities`<sup>Optional</sup> <a name="nodeAffinities" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.nodeAffinities"></a>

```java
public java.lang.Object getNodeAffinities();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities">GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities</a>>

node_affinities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#node_affinities GoogleComputeInstanceFromMachineImage#node_affinities}

---

##### `onHostMaintenance`<sup>Optional</sup> <a name="onHostMaintenance" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.onHostMaintenance"></a>

```java
public java.lang.String getOnHostMaintenance();
```

- *Type:* java.lang.String

Describes maintenance behavior for the instance. One of MIGRATE or TERMINATE,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#on_host_maintenance GoogleComputeInstanceFromMachineImage#on_host_maintenance}

---

##### `onInstanceStopAction`<sup>Optional</sup> <a name="onInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.onInstanceStopAction"></a>

```java
public GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction getOnInstanceStopAction();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction">GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction</a>

on_instance_stop_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#on_instance_stop_action GoogleComputeInstanceFromMachineImage#on_instance_stop_action}

---

##### `preemptible`<sup>Optional</sup> <a name="preemptible" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.preemptible"></a>

```java
public java.lang.Object getPreemptible();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the instance is preemptible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#preemptible GoogleComputeInstanceFromMachineImage#preemptible}

---

##### `provisioningModel`<sup>Optional</sup> <a name="provisioningModel" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.provisioningModel"></a>

```java
public java.lang.String getProvisioningModel();
```

- *Type:* java.lang.String

Whether the instance is spot. If this is set as SPOT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#provisioning_model GoogleComputeInstanceFromMachineImage#provisioning_model}

---

### GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout <a name="GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout;

GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout.builder()
    .seconds(java.lang.Number)
//  .nanos(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#seconds GoogleComputeInstanceFromMachineImage#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#nanos GoogleComputeInstanceFromMachineImage#nanos}

---

### GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration <a name="GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration;

GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration.builder()
    .seconds(java.lang.Number)
//  .nanos(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#seconds GoogleComputeInstanceFromMachineImage#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#nanos GoogleComputeInstanceFromMachineImage#nanos}

---

### GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities <a name="GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities;

GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities.builder()
    .key(java.lang.String)
    .operator(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#key GoogleComputeInstanceFromMachineImage#key}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#operator GoogleComputeInstanceFromMachineImage#operator}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#values GoogleComputeInstanceFromMachineImage#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#key GoogleComputeInstanceFromMachineImage#key}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#operator GoogleComputeInstanceFromMachineImage#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#values GoogleComputeInstanceFromMachineImage#values}.

---

### GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction <a name="GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction;

GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction.builder()
//  .discardLocalSsd(java.lang.Boolean)
//  .discardLocalSsd(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction.property.discardLocalSsd">discardLocalSsd</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the contents of any attached Local SSD disks will be discarded. |

---

##### `discardLocalSsd`<sup>Optional</sup> <a name="discardLocalSsd" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction.property.discardLocalSsd"></a>

```java
public java.lang.Object getDiscardLocalSsd();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the contents of any attached Local SSD disks will be discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#discard_local_ssd GoogleComputeInstanceFromMachineImage#discard_local_ssd}

---

### GoogleComputeInstanceFromMachineImageScratchDisk <a name="GoogleComputeInstanceFromMachineImageScratchDisk" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageScratchDisk;

GoogleComputeInstanceFromMachineImageScratchDisk.builder()
    .build();
```


### GoogleComputeInstanceFromMachineImageServiceAccount <a name="GoogleComputeInstanceFromMachineImageServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageServiceAccount;

GoogleComputeInstanceFromMachineImageServiceAccount.builder()
    .scopes(java.util.List<java.lang.String>)
//  .email(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccount.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | A list of service scopes. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccount.property.email">email</a></code> | <code>java.lang.String</code> | The service account e-mail address. |

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccount.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

A list of service scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#scopes GoogleComputeInstanceFromMachineImage#scopes}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccount.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

The service account e-mail address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#email GoogleComputeInstanceFromMachineImage#email}

---

### GoogleComputeInstanceFromMachineImageShieldedInstanceConfig <a name="GoogleComputeInstanceFromMachineImageShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageShieldedInstanceConfig;

GoogleComputeInstanceFromMachineImageShieldedInstanceConfig.builder()
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
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfig.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether integrity monitoring is enabled for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfig.property.enableSecureBoot">enableSecureBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether secure boot is enabled for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfig.property.enableVtpm">enableVtpm</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the instance uses vTPM. |

---

##### `enableIntegrityMonitoring`<sup>Optional</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```java
public java.lang.Object getEnableIntegrityMonitoring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether integrity monitoring is enabled for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#enable_integrity_monitoring GoogleComputeInstanceFromMachineImage#enable_integrity_monitoring}

---

##### `enableSecureBoot`<sup>Optional</sup> <a name="enableSecureBoot" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfig.property.enableSecureBoot"></a>

```java
public java.lang.Object getEnableSecureBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether secure boot is enabled for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#enable_secure_boot GoogleComputeInstanceFromMachineImage#enable_secure_boot}

---

##### `enableVtpm`<sup>Optional</sup> <a name="enableVtpm" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfig.property.enableVtpm"></a>

```java
public java.lang.Object getEnableVtpm();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the instance uses vTPM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#enable_vtpm GoogleComputeInstanceFromMachineImage#enable_vtpm}

---

### GoogleComputeInstanceFromMachineImageTimeouts <a name="GoogleComputeInstanceFromMachineImageTimeouts" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageTimeouts;

GoogleComputeInstanceFromMachineImageTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#create GoogleComputeInstanceFromMachineImage#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#delete GoogleComputeInstanceFromMachineImage#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#update GoogleComputeInstanceFromMachineImage#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#create GoogleComputeInstanceFromMachineImage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#delete GoogleComputeInstanceFromMachineImage#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#update GoogleComputeInstanceFromMachineImage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference <a name="GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference;

new GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.resetEnableNestedVirtualization">resetEnableNestedVirtualization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.resetEnableUefiNetworking">resetEnableUefiNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.resetPerformanceMonitoringUnit">resetPerformanceMonitoringUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.resetThreadsPerCore">resetThreadsPerCore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.resetTurboMode">resetTurboMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.resetVisibleCoreCount">resetVisibleCoreCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableNestedVirtualization` <a name="resetEnableNestedVirtualization" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.resetEnableNestedVirtualization"></a>

```java
public void resetEnableNestedVirtualization()
```

##### `resetEnableUefiNetworking` <a name="resetEnableUefiNetworking" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.resetEnableUefiNetworking"></a>

```java
public void resetEnableUefiNetworking()
```

##### `resetPerformanceMonitoringUnit` <a name="resetPerformanceMonitoringUnit" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.resetPerformanceMonitoringUnit"></a>

```java
public void resetPerformanceMonitoringUnit()
```

##### `resetThreadsPerCore` <a name="resetThreadsPerCore" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.resetThreadsPerCore"></a>

```java
public void resetThreadsPerCore()
```

##### `resetTurboMode` <a name="resetTurboMode" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.resetTurboMode"></a>

```java
public void resetTurboMode()
```

##### `resetVisibleCoreCount` <a name="resetVisibleCoreCount" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.resetVisibleCoreCount"></a>

```java
public void resetVisibleCoreCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualizationInput">enableNestedVirtualizationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.enableUefiNetworkingInput">enableUefiNetworkingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnitInput">performanceMonitoringUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput">threadsPerCoreInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.turboModeInput">turboModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.visibleCoreCountInput">visibleCoreCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization">enableNestedVirtualization</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.enableUefiNetworking">enableUefiNetworking</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnit">performanceMonitoringUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.threadsPerCore">threadsPerCore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.turboMode">turboMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.visibleCoreCount">visibleCoreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures">GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableNestedVirtualizationInput`<sup>Optional</sup> <a name="enableNestedVirtualizationInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualizationInput"></a>

```java
public java.lang.Object getEnableNestedVirtualizationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableUefiNetworkingInput`<sup>Optional</sup> <a name="enableUefiNetworkingInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.enableUefiNetworkingInput"></a>

```java
public java.lang.Object getEnableUefiNetworkingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `performanceMonitoringUnitInput`<sup>Optional</sup> <a name="performanceMonitoringUnitInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnitInput"></a>

```java
public java.lang.String getPerformanceMonitoringUnitInput();
```

- *Type:* java.lang.String

---

##### `threadsPerCoreInput`<sup>Optional</sup> <a name="threadsPerCoreInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput"></a>

```java
public java.lang.Number getThreadsPerCoreInput();
```

- *Type:* java.lang.Number

---

##### `turboModeInput`<sup>Optional</sup> <a name="turboModeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.turboModeInput"></a>

```java
public java.lang.String getTurboModeInput();
```

- *Type:* java.lang.String

---

##### `visibleCoreCountInput`<sup>Optional</sup> <a name="visibleCoreCountInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.visibleCoreCountInput"></a>

```java
public java.lang.Number getVisibleCoreCountInput();
```

- *Type:* java.lang.Number

---

##### `enableNestedVirtualization`<sup>Required</sup> <a name="enableNestedVirtualization" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization"></a>

```java
public java.lang.Object getEnableNestedVirtualization();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableUefiNetworking`<sup>Required</sup> <a name="enableUefiNetworking" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.enableUefiNetworking"></a>

```java
public java.lang.Object getEnableUefiNetworking();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `performanceMonitoringUnit`<sup>Required</sup> <a name="performanceMonitoringUnit" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnit"></a>

```java
public java.lang.String getPerformanceMonitoringUnit();
```

- *Type:* java.lang.String

---

##### `threadsPerCore`<sup>Required</sup> <a name="threadsPerCore" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.threadsPerCore"></a>

```java
public java.lang.Number getThreadsPerCore();
```

- *Type:* java.lang.Number

---

##### `turboMode`<sup>Required</sup> <a name="turboMode" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.turboMode"></a>

```java
public java.lang.String getTurboMode();
```

- *Type:* java.lang.String

---

##### `visibleCoreCount`<sup>Required</sup> <a name="visibleCoreCount" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.visibleCoreCount"></a>

```java
public java.lang.Number getVisibleCoreCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.internalValue"></a>

```java
public GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures">GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures</a>

---


### GoogleComputeInstanceFromMachineImageAttachedDiskList <a name="GoogleComputeInstanceFromMachineImageAttachedDiskList" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageAttachedDiskList;

new GoogleComputeInstanceFromMachineImageAttachedDiskList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.get"></a>

```java
public GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference <a name="GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference;

new GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.property.diskEncryptionKeyRaw">diskEncryptionKeyRaw</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.property.diskEncryptionKeySha256">diskEncryptionKeySha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDisk">GoogleComputeInstanceFromMachineImageAttachedDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

---

##### `diskEncryptionKeyRaw`<sup>Required</sup> <a name="diskEncryptionKeyRaw" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.property.diskEncryptionKeyRaw"></a>

```java
public java.lang.String getDiskEncryptionKeyRaw();
```

- *Type:* java.lang.String

---

##### `diskEncryptionKeySha256`<sup>Required</sup> <a name="diskEncryptionKeySha256" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.property.diskEncryptionKeySha256"></a>

```java
public java.lang.String getDiskEncryptionKeySha256();
```

- *Type:* java.lang.String

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.property.kmsKeySelfLink"></a>

```java
public java.lang.String getKmsKeySelfLink();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.property.internalValue"></a>

```java
public GoogleComputeInstanceFromMachineImageAttachedDisk getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDisk">GoogleComputeInstanceFromMachineImageAttachedDisk</a>

---


### GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList <a name="GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList;

new GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.get"></a>

```java
public GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference <a name="GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference;

new GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.enableConfidentialCompute">enableConfidentialCompute</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.provisionedIops">provisionedIops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.provisionedThroughput">provisionedThroughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.resourceManagerTags">resourceManagerTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.resourcePolicies">resourcePolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.storagePool">storagePool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParams">GoogleComputeInstanceFromMachineImageBootDiskInitializeParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableConfidentialCompute`<sup>Required</sup> <a name="enableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.enableConfidentialCompute"></a>

```java
public IResolvable getEnableConfidentialCompute();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.labels"></a>

```java
public StringMap getLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `provisionedIops`<sup>Required</sup> <a name="provisionedIops" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.provisionedIops"></a>

```java
public java.lang.Number getProvisionedIops();
```

- *Type:* java.lang.Number

---

##### `provisionedThroughput`<sup>Required</sup> <a name="provisionedThroughput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.provisionedThroughput"></a>

```java
public java.lang.Number getProvisionedThroughput();
```

- *Type:* java.lang.Number

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.resourceManagerTags"></a>

```java
public StringMap getResourceManagerTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `resourcePolicies`<sup>Required</sup> <a name="resourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.resourcePolicies"></a>

```java
public java.util.List<java.lang.String> getResourcePolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `storagePool`<sup>Required</sup> <a name="storagePool" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.storagePool"></a>

```java
public java.lang.String getStoragePool();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.internalValue"></a>

```java
public GoogleComputeInstanceFromMachineImageBootDiskInitializeParams getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParams">GoogleComputeInstanceFromMachineImageBootDiskInitializeParams</a>

---


### GoogleComputeInstanceFromMachineImageBootDiskList <a name="GoogleComputeInstanceFromMachineImageBootDiskList" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageBootDiskList;

new GoogleComputeInstanceFromMachineImageBootDiskList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.get"></a>

```java
public GoogleComputeInstanceFromMachineImageBootDiskOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeInstanceFromMachineImageBootDiskOutputReference <a name="GoogleComputeInstanceFromMachineImageBootDiskOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageBootDiskOutputReference;

new GoogleComputeInstanceFromMachineImageBootDiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.autoDelete">autoDelete</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.diskEncryptionKeyRaw">diskEncryptionKeyRaw</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.diskEncryptionKeySha256">diskEncryptionKeySha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.initializeParams">initializeParams</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList">GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.interface">interface</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDisk">GoogleComputeInstanceFromMachineImageBootDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoDelete`<sup>Required</sup> <a name="autoDelete" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.autoDelete"></a>

```java
public IResolvable getAutoDelete();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

---

##### `diskEncryptionKeyRaw`<sup>Required</sup> <a name="diskEncryptionKeyRaw" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.diskEncryptionKeyRaw"></a>

```java
public java.lang.String getDiskEncryptionKeyRaw();
```

- *Type:* java.lang.String

---

##### `diskEncryptionKeySha256`<sup>Required</sup> <a name="diskEncryptionKeySha256" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.diskEncryptionKeySha256"></a>

```java
public java.lang.String getDiskEncryptionKeySha256();
```

- *Type:* java.lang.String

---

##### `initializeParams`<sup>Required</sup> <a name="initializeParams" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.initializeParams"></a>

```java
public GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList getInitializeParams();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList">GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList</a>

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.interface"></a>

```java
public java.lang.String getInterface();
```

- *Type:* java.lang.String

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.kmsKeySelfLink"></a>

```java
public java.lang.String getKmsKeySelfLink();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.internalValue"></a>

```java
public GoogleComputeInstanceFromMachineImageBootDisk getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDisk">GoogleComputeInstanceFromMachineImageBootDisk</a>

---


### GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference <a name="GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference;

new GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.resetConfidentialInstanceType">resetConfidentialInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute">resetEnableConfidentialCompute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfidentialInstanceType` <a name="resetConfidentialInstanceType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.resetConfidentialInstanceType"></a>

```java
public void resetConfidentialInstanceType()
```

##### `resetEnableConfidentialCompute` <a name="resetEnableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute"></a>

```java
public void resetEnableConfidentialCompute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.property.confidentialInstanceTypeInput">confidentialInstanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput">enableConfidentialComputeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.property.confidentialInstanceType">confidentialInstanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute">enableConfidentialCompute</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig">GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `confidentialInstanceTypeInput`<sup>Optional</sup> <a name="confidentialInstanceTypeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.property.confidentialInstanceTypeInput"></a>

```java
public java.lang.String getConfidentialInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `enableConfidentialComputeInput`<sup>Optional</sup> <a name="enableConfidentialComputeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput"></a>

```java
public java.lang.Object getEnableConfidentialComputeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `confidentialInstanceType`<sup>Required</sup> <a name="confidentialInstanceType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.property.confidentialInstanceType"></a>

```java
public java.lang.String getConfidentialInstanceType();
```

- *Type:* java.lang.String

---

##### `enableConfidentialCompute`<sup>Required</sup> <a name="enableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute"></a>

```java
public java.lang.Object getEnableConfidentialCompute();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.property.internalValue"></a>

```java
public GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig">GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig</a>

---


### GoogleComputeInstanceFromMachineImageGuestAcceleratorList <a name="GoogleComputeInstanceFromMachineImageGuestAcceleratorList" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageGuestAcceleratorList;

new GoogleComputeInstanceFromMachineImageGuestAcceleratorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.get"></a>

```java
public GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAccelerator">GoogleComputeInstanceFromMachineImageGuestAccelerator</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAccelerator">GoogleComputeInstanceFromMachineImageGuestAccelerator</a>>

---


### GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference <a name="GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference;

new GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAccelerator">GoogleComputeInstanceFromMachineImageGuestAccelerator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAccelerator">GoogleComputeInstanceFromMachineImageGuestAccelerator</a>

---


### GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList <a name="GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList;

new GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.get"></a>

```java
public GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig">GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig">GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig</a>>

---


### GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference <a name="GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference;

new GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.resetNatIp">resetNatIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.resetNetworkTier">resetNetworkTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.resetPublicPtrDomainName">resetPublicPtrDomainName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNatIp` <a name="resetNatIp" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.resetNatIp"></a>

```java
public void resetNatIp()
```

##### `resetNetworkTier` <a name="resetNetworkTier" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.resetNetworkTier"></a>

```java
public void resetNetworkTier()
```

##### `resetPublicPtrDomainName` <a name="resetPublicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.resetPublicPtrDomainName"></a>

```java
public void resetPublicPtrDomainName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.natIpInput">natIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.networkTierInput">networkTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainNameInput">publicPtrDomainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.natIp">natIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.networkTier">networkTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName">publicPtrDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig">GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.securityPolicy"></a>

```java
public java.lang.String getSecurityPolicy();
```

- *Type:* java.lang.String

---

##### `natIpInput`<sup>Optional</sup> <a name="natIpInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.natIpInput"></a>

```java
public java.lang.String getNatIpInput();
```

- *Type:* java.lang.String

---

##### `networkTierInput`<sup>Optional</sup> <a name="networkTierInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.networkTierInput"></a>

```java
public java.lang.String getNetworkTierInput();
```

- *Type:* java.lang.String

---

##### `publicPtrDomainNameInput`<sup>Optional</sup> <a name="publicPtrDomainNameInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainNameInput"></a>

```java
public java.lang.String getPublicPtrDomainNameInput();
```

- *Type:* java.lang.String

---

##### `natIp`<sup>Required</sup> <a name="natIp" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.natIp"></a>

```java
public java.lang.String getNatIp();
```

- *Type:* java.lang.String

---

##### `networkTier`<sup>Required</sup> <a name="networkTier" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.networkTier"></a>

```java
public java.lang.String getNetworkTier();
```

- *Type:* java.lang.String

---

##### `publicPtrDomainName`<sup>Required</sup> <a name="publicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName"></a>

```java
public java.lang.String getPublicPtrDomainName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig">GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig</a>

---


### GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList <a name="GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList;

new GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.get"></a>

```java
public GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange">GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange">GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange</a>>

---


### GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference <a name="GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference;

new GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.resetSubnetworkRangeName">resetSubnetworkRangeName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubnetworkRangeName` <a name="resetSubnetworkRangeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.resetSubnetworkRangeName"></a>

```java
public void resetSubnetworkRangeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRangeInput">ipCidrRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeNameInput">subnetworkRangeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName">subnetworkRangeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange">GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipCidrRangeInput`<sup>Optional</sup> <a name="ipCidrRangeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRangeInput"></a>

```java
public java.lang.String getIpCidrRangeInput();
```

- *Type:* java.lang.String

---

##### `subnetworkRangeNameInput`<sup>Optional</sup> <a name="subnetworkRangeNameInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeNameInput"></a>

```java
public java.lang.String getSubnetworkRangeNameInput();
```

- *Type:* java.lang.String

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

---

##### `subnetworkRangeName`<sup>Required</sup> <a name="subnetworkRangeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName"></a>

```java
public java.lang.String getSubnetworkRangeName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange">GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange</a>

---


### GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList <a name="GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList;

new GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.get"></a>

```java
public GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig">GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig">GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig</a>>

---


### GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference <a name="GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference;

new GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.resetExternalIpv6">resetExternalIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.resetExternalIpv6PrefixLength">resetExternalIpv6PrefixLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.resetPublicPtrDomainName">resetPublicPtrDomainName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExternalIpv6` <a name="resetExternalIpv6" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.resetExternalIpv6"></a>

```java
public void resetExternalIpv6()
```

##### `resetExternalIpv6PrefixLength` <a name="resetExternalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.resetExternalIpv6PrefixLength"></a>

```java
public void resetExternalIpv6PrefixLength()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPublicPtrDomainName` <a name="resetPublicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.resetPublicPtrDomainName"></a>

```java
public void resetPublicPtrDomainName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6Input">externalIpv6Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLengthInput">externalIpv6PrefixLengthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTierInput">networkTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainNameInput">publicPtrDomainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6">externalIpv6</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength">externalIpv6PrefixLength</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier">networkTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName">publicPtrDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig">GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.securityPolicy"></a>

```java
public java.lang.String getSecurityPolicy();
```

- *Type:* java.lang.String

---

##### `externalIpv6Input`<sup>Optional</sup> <a name="externalIpv6Input" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6Input"></a>

```java
public java.lang.String getExternalIpv6Input();
```

- *Type:* java.lang.String

---

##### `externalIpv6PrefixLengthInput`<sup>Optional</sup> <a name="externalIpv6PrefixLengthInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLengthInput"></a>

```java
public java.lang.String getExternalIpv6PrefixLengthInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkTierInput`<sup>Optional</sup> <a name="networkTierInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTierInput"></a>

```java
public java.lang.String getNetworkTierInput();
```

- *Type:* java.lang.String

---

##### `publicPtrDomainNameInput`<sup>Optional</sup> <a name="publicPtrDomainNameInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainNameInput"></a>

```java
public java.lang.String getPublicPtrDomainNameInput();
```

- *Type:* java.lang.String

---

##### `externalIpv6`<sup>Required</sup> <a name="externalIpv6" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6"></a>

```java
public java.lang.String getExternalIpv6();
```

- *Type:* java.lang.String

---

##### `externalIpv6PrefixLength`<sup>Required</sup> <a name="externalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength"></a>

```java
public java.lang.String getExternalIpv6PrefixLength();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkTier`<sup>Required</sup> <a name="networkTier" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier"></a>

```java
public java.lang.String getNetworkTier();
```

- *Type:* java.lang.String

---

##### `publicPtrDomainName`<sup>Required</sup> <a name="publicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName"></a>

```java
public java.lang.String getPublicPtrDomainName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig">GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig</a>

---


### GoogleComputeInstanceFromMachineImageNetworkInterfaceList <a name="GoogleComputeInstanceFromMachineImageNetworkInterfaceList" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageNetworkInterfaceList;

new GoogleComputeInstanceFromMachineImageNetworkInterfaceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.get"></a>

```java
public GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface">GoogleComputeInstanceFromMachineImageNetworkInterface</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface">GoogleComputeInstanceFromMachineImageNetworkInterface</a>>

---


### GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference <a name="GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference;

new GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.putAccessConfig">putAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.putAliasIpRange">putAliasIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.putIpv6AccessConfig">putIpv6AccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetAccessConfig">resetAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetAliasIpRange">resetAliasIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetInternalIpv6PrefixLength">resetInternalIpv6PrefixLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetIpv6AccessConfig">resetIpv6AccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetIpv6Address">resetIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetNetworkAttachment">resetNetworkAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetNetworkIp">resetNetworkIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetNicType">resetNicType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetQueueCount">resetQueueCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetSecurityPolicy">resetSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetStackType">resetStackType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetSubnetworkProject">resetSubnetworkProject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessConfig` <a name="putAccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.putAccessConfig"></a>

```java
public void putAccessConfig(IResolvable OR java.util.List<GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.putAccessConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig">GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig</a>>

---

##### `putAliasIpRange` <a name="putAliasIpRange" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.putAliasIpRange"></a>

```java
public void putAliasIpRange(IResolvable OR java.util.List<GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.putAliasIpRange.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange">GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange</a>>

---

##### `putIpv6AccessConfig` <a name="putIpv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.putIpv6AccessConfig"></a>

```java
public void putIpv6AccessConfig(IResolvable OR java.util.List<GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.putIpv6AccessConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig">GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig</a>>

---

##### `resetAccessConfig` <a name="resetAccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetAccessConfig"></a>

```java
public void resetAccessConfig()
```

##### `resetAliasIpRange` <a name="resetAliasIpRange" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetAliasIpRange"></a>

```java
public void resetAliasIpRange()
```

##### `resetInternalIpv6PrefixLength` <a name="resetInternalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetInternalIpv6PrefixLength"></a>

```java
public void resetInternalIpv6PrefixLength()
```

##### `resetIpv6AccessConfig` <a name="resetIpv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetIpv6AccessConfig"></a>

```java
public void resetIpv6AccessConfig()
```

##### `resetIpv6Address` <a name="resetIpv6Address" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetIpv6Address"></a>

```java
public void resetIpv6Address()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetNetworkAttachment` <a name="resetNetworkAttachment" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetNetworkAttachment"></a>

```java
public void resetNetworkAttachment()
```

##### `resetNetworkIp` <a name="resetNetworkIp" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetNetworkIp"></a>

```java
public void resetNetworkIp()
```

##### `resetNicType` <a name="resetNicType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetNicType"></a>

```java
public void resetNicType()
```

##### `resetQueueCount` <a name="resetQueueCount" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetQueueCount"></a>

```java
public void resetQueueCount()
```

##### `resetSecurityPolicy` <a name="resetSecurityPolicy" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetSecurityPolicy"></a>

```java
public void resetSecurityPolicy()
```

##### `resetStackType` <a name="resetStackType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetStackType"></a>

```java
public void resetStackType()
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetSubnetwork"></a>

```java
public void resetSubnetwork()
```

##### `resetSubnetworkProject` <a name="resetSubnetworkProject" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetSubnetworkProject"></a>

```java
public void resetSubnetworkProject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.accessConfig">accessConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList">GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.aliasIpRange">aliasIpRange</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList">GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.ipv6AccessConfig">ipv6AccessConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList">GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.ipv6AccessType">ipv6AccessType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.accessConfigInput">accessConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig">GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.aliasIpRangeInput">aliasIpRangeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange">GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.internalIpv6PrefixLengthInput">internalIpv6PrefixLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.ipv6AccessConfigInput">ipv6AccessConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig">GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.ipv6AddressInput">ipv6AddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.networkAttachmentInput">networkAttachmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.networkIpInput">networkIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.nicTypeInput">nicTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.queueCountInput">queueCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.securityPolicyInput">securityPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.stackTypeInput">stackTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.subnetworkInput">subnetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.subnetworkProjectInput">subnetworkProjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.internalIpv6PrefixLength">internalIpv6PrefixLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.ipv6Address">ipv6Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.networkAttachment">networkAttachment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.networkIp">networkIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.nicType">nicType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.queueCount">queueCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.stackType">stackType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.subnetworkProject">subnetworkProject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface">GoogleComputeInstanceFromMachineImageNetworkInterface</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessConfig`<sup>Required</sup> <a name="accessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.accessConfig"></a>

```java
public GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList getAccessConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList">GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList</a>

---

##### `aliasIpRange`<sup>Required</sup> <a name="aliasIpRange" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.aliasIpRange"></a>

```java
public GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList getAliasIpRange();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList">GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList</a>

---

##### `ipv6AccessConfig`<sup>Required</sup> <a name="ipv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.ipv6AccessConfig"></a>

```java
public GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList getIpv6AccessConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList">GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList</a>

---

##### `ipv6AccessType`<sup>Required</sup> <a name="ipv6AccessType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.ipv6AccessType"></a>

```java
public java.lang.String getIpv6AccessType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `accessConfigInput`<sup>Optional</sup> <a name="accessConfigInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.accessConfigInput"></a>

```java
public java.lang.Object getAccessConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig">GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig</a>>

---

##### `aliasIpRangeInput`<sup>Optional</sup> <a name="aliasIpRangeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.aliasIpRangeInput"></a>

```java
public java.lang.Object getAliasIpRangeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange">GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange</a>>

---

##### `internalIpv6PrefixLengthInput`<sup>Optional</sup> <a name="internalIpv6PrefixLengthInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.internalIpv6PrefixLengthInput"></a>

```java
public java.lang.Number getInternalIpv6PrefixLengthInput();
```

- *Type:* java.lang.Number

---

##### `ipv6AccessConfigInput`<sup>Optional</sup> <a name="ipv6AccessConfigInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.ipv6AccessConfigInput"></a>

```java
public java.lang.Object getIpv6AccessConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig">GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig</a>>

---

##### `ipv6AddressInput`<sup>Optional</sup> <a name="ipv6AddressInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.ipv6AddressInput"></a>

```java
public java.lang.String getIpv6AddressInput();
```

- *Type:* java.lang.String

---

##### `networkAttachmentInput`<sup>Optional</sup> <a name="networkAttachmentInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.networkAttachmentInput"></a>

```java
public java.lang.String getNetworkAttachmentInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `networkIpInput`<sup>Optional</sup> <a name="networkIpInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.networkIpInput"></a>

```java
public java.lang.String getNetworkIpInput();
```

- *Type:* java.lang.String

---

##### `nicTypeInput`<sup>Optional</sup> <a name="nicTypeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.nicTypeInput"></a>

```java
public java.lang.String getNicTypeInput();
```

- *Type:* java.lang.String

---

##### `queueCountInput`<sup>Optional</sup> <a name="queueCountInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.queueCountInput"></a>

```java
public java.lang.Number getQueueCountInput();
```

- *Type:* java.lang.Number

---

##### `securityPolicyInput`<sup>Optional</sup> <a name="securityPolicyInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.securityPolicyInput"></a>

```java
public java.lang.String getSecurityPolicyInput();
```

- *Type:* java.lang.String

---

##### `stackTypeInput`<sup>Optional</sup> <a name="stackTypeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.stackTypeInput"></a>

```java
public java.lang.String getStackTypeInput();
```

- *Type:* java.lang.String

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.subnetworkInput"></a>

```java
public java.lang.String getSubnetworkInput();
```

- *Type:* java.lang.String

---

##### `subnetworkProjectInput`<sup>Optional</sup> <a name="subnetworkProjectInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.subnetworkProjectInput"></a>

```java
public java.lang.String getSubnetworkProjectInput();
```

- *Type:* java.lang.String

---

##### `internalIpv6PrefixLength`<sup>Required</sup> <a name="internalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.internalIpv6PrefixLength"></a>

```java
public java.lang.Number getInternalIpv6PrefixLength();
```

- *Type:* java.lang.Number

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.ipv6Address"></a>

```java
public java.lang.String getIpv6Address();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.networkAttachment"></a>

```java
public java.lang.String getNetworkAttachment();
```

- *Type:* java.lang.String

---

##### `networkIp`<sup>Required</sup> <a name="networkIp" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.networkIp"></a>

```java
public java.lang.String getNetworkIp();
```

- *Type:* java.lang.String

---

##### `nicType`<sup>Required</sup> <a name="nicType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.nicType"></a>

```java
public java.lang.String getNicType();
```

- *Type:* java.lang.String

---

##### `queueCount`<sup>Required</sup> <a name="queueCount" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.queueCount"></a>

```java
public java.lang.Number getQueueCount();
```

- *Type:* java.lang.Number

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.securityPolicy"></a>

```java
public java.lang.String getSecurityPolicy();
```

- *Type:* java.lang.String

---

##### `stackType`<sup>Required</sup> <a name="stackType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.stackType"></a>

```java
public java.lang.String getStackType();
```

- *Type:* java.lang.String

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

---

##### `subnetworkProject`<sup>Required</sup> <a name="subnetworkProject" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.subnetworkProject"></a>

```java
public java.lang.String getSubnetworkProject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface">GoogleComputeInstanceFromMachineImageNetworkInterface</a>

---


### GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference <a name="GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference;

new GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTierInput">totalEgressBandwidthTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier">totalEgressBandwidthTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig">GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `totalEgressBandwidthTierInput`<sup>Optional</sup> <a name="totalEgressBandwidthTierInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTierInput"></a>

```java
public java.lang.String getTotalEgressBandwidthTierInput();
```

- *Type:* java.lang.String

---

##### `totalEgressBandwidthTier`<sup>Required</sup> <a name="totalEgressBandwidthTier" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier"></a>

```java
public java.lang.String getTotalEgressBandwidthTier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.property.internalValue"></a>

```java
public GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig">GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig</a>

---


### GoogleComputeInstanceFromMachineImageParamsOutputReference <a name="GoogleComputeInstanceFromMachineImageParamsOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageParamsOutputReference;

new GoogleComputeInstanceFromMachineImageParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.resetResourceManagerTags">resetResourceManagerTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceManagerTags` <a name="resetResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.resetResourceManagerTags"></a>

```java
public void resetResourceManagerTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.property.resourceManagerTagsInput">resourceManagerTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.property.resourceManagerTags">resourceManagerTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParams">GoogleComputeInstanceFromMachineImageParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceManagerTagsInput`<sup>Optional</sup> <a name="resourceManagerTagsInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.property.resourceManagerTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.property.resourceManagerTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.property.internalValue"></a>

```java
public GoogleComputeInstanceFromMachineImageParams getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParams">GoogleComputeInstanceFromMachineImageParams</a>

---


### GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference <a name="GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference;

new GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.putSpecificReservation">putSpecificReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.resetSpecificReservation">resetSpecificReservation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSpecificReservation` <a name="putSpecificReservation" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.putSpecificReservation"></a>

```java
public void putSpecificReservation(GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.putSpecificReservation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation">GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation</a>

---

##### `resetSpecificReservation` <a name="resetSpecificReservation" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.resetSpecificReservation"></a>

```java
public void resetSpecificReservation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.property.specificReservation">specificReservation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference">GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.property.specificReservationInput">specificReservationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation">GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinity">GoogleComputeInstanceFromMachineImageReservationAffinity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `specificReservation`<sup>Required</sup> <a name="specificReservation" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.property.specificReservation"></a>

```java
public GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference getSpecificReservation();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference">GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference</a>

---

##### `specificReservationInput`<sup>Optional</sup> <a name="specificReservationInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.property.specificReservationInput"></a>

```java
public GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation getSpecificReservationInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation">GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.property.internalValue"></a>

```java
public GoogleComputeInstanceFromMachineImageReservationAffinity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinity">GoogleComputeInstanceFromMachineImageReservationAffinity</a>

---


### GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference <a name="GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference;

new GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation">GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.property.internalValue"></a>

```java
public GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation">GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation</a>

---


### GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference <a name="GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference;

new GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.resetNanos"></a>

```java
public void resetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue"></a>

```java
public GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout</a>

---


### GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference <a name="GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference;

new GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.resetNanos"></a>

```java
public void resetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration">GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.property.internalValue"></a>

```java
public GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration">GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration</a>

---


### GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList <a name="GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList;

new GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.get"></a>

```java
public GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities">GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities">GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities</a>>

---


### GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference <a name="GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference;

new GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities">GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities">GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities</a>

---


### GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference <a name="GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference;

new GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.resetDiscardLocalSsd">resetDiscardLocalSsd</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiscardLocalSsd` <a name="resetDiscardLocalSsd" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.resetDiscardLocalSsd"></a>

```java
public void resetDiscardLocalSsd()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsdInput">discardLocalSsdInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsd">discardLocalSsd</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction">GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `discardLocalSsdInput`<sup>Optional</sup> <a name="discardLocalSsdInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsdInput"></a>

```java
public java.lang.Object getDiscardLocalSsdInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `discardLocalSsd`<sup>Required</sup> <a name="discardLocalSsd" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsd"></a>

```java
public java.lang.Object getDiscardLocalSsd();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.property.internalValue"></a>

```java
public GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction">GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction</a>

---


### GoogleComputeInstanceFromMachineImageSchedulingOutputReference <a name="GoogleComputeInstanceFromMachineImageSchedulingOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageSchedulingOutputReference;

new GoogleComputeInstanceFromMachineImageSchedulingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.putLocalSsdRecoveryTimeout">putLocalSsdRecoveryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.putMaxRunDuration">putMaxRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.putNodeAffinities">putNodeAffinities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.putOnInstanceStopAction">putOnInstanceStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetAutomaticRestart">resetAutomaticRestart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetHostErrorTimeoutSeconds">resetHostErrorTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetInstanceTerminationAction">resetInstanceTerminationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetLocalSsdRecoveryTimeout">resetLocalSsdRecoveryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetMaintenanceInterval">resetMaintenanceInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetMaxRunDuration">resetMaxRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetMinNodeCpus">resetMinNodeCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetNodeAffinities">resetNodeAffinities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetOnHostMaintenance">resetOnHostMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetOnInstanceStopAction">resetOnInstanceStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetPreemptible">resetPreemptible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetProvisioningModel">resetProvisioningModel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLocalSsdRecoveryTimeout` <a name="putLocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.putLocalSsdRecoveryTimeout"></a>

```java
public void putLocalSsdRecoveryTimeout(GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.putLocalSsdRecoveryTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout</a>

---

##### `putMaxRunDuration` <a name="putMaxRunDuration" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.putMaxRunDuration"></a>

```java
public void putMaxRunDuration(GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.putMaxRunDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration">GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration</a>

---

##### `putNodeAffinities` <a name="putNodeAffinities" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.putNodeAffinities"></a>

```java
public void putNodeAffinities(IResolvable OR java.util.List<GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.putNodeAffinities.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities">GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities</a>>

---

##### `putOnInstanceStopAction` <a name="putOnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.putOnInstanceStopAction"></a>

```java
public void putOnInstanceStopAction(GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.putOnInstanceStopAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction">GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction</a>

---

##### `resetAutomaticRestart` <a name="resetAutomaticRestart" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetAutomaticRestart"></a>

```java
public void resetAutomaticRestart()
```

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetAvailabilityDomain"></a>

```java
public void resetAvailabilityDomain()
```

##### `resetHostErrorTimeoutSeconds` <a name="resetHostErrorTimeoutSeconds" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetHostErrorTimeoutSeconds"></a>

```java
public void resetHostErrorTimeoutSeconds()
```

##### `resetInstanceTerminationAction` <a name="resetInstanceTerminationAction" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetInstanceTerminationAction"></a>

```java
public void resetInstanceTerminationAction()
```

##### `resetLocalSsdRecoveryTimeout` <a name="resetLocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetLocalSsdRecoveryTimeout"></a>

```java
public void resetLocalSsdRecoveryTimeout()
```

##### `resetMaintenanceInterval` <a name="resetMaintenanceInterval" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetMaintenanceInterval"></a>

```java
public void resetMaintenanceInterval()
```

##### `resetMaxRunDuration` <a name="resetMaxRunDuration" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetMaxRunDuration"></a>

```java
public void resetMaxRunDuration()
```

##### `resetMinNodeCpus` <a name="resetMinNodeCpus" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetMinNodeCpus"></a>

```java
public void resetMinNodeCpus()
```

##### `resetNodeAffinities` <a name="resetNodeAffinities" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetNodeAffinities"></a>

```java
public void resetNodeAffinities()
```

##### `resetOnHostMaintenance` <a name="resetOnHostMaintenance" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetOnHostMaintenance"></a>

```java
public void resetOnHostMaintenance()
```

##### `resetOnInstanceStopAction` <a name="resetOnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetOnInstanceStopAction"></a>

```java
public void resetOnInstanceStopAction()
```

##### `resetPreemptible` <a name="resetPreemptible" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetPreemptible"></a>

```java
public void resetPreemptible()
```

##### `resetProvisioningModel` <a name="resetProvisioningModel" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetProvisioningModel"></a>

```java
public void resetProvisioningModel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.localSsdRecoveryTimeout">localSsdRecoveryTimeout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference">GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.maxRunDuration">maxRunDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference">GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.nodeAffinities">nodeAffinities</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList">GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.onInstanceStopAction">onInstanceStopAction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference">GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.automaticRestartInput">automaticRestartInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.hostErrorTimeoutSecondsInput">hostErrorTimeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.instanceTerminationActionInput">instanceTerminationActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.localSsdRecoveryTimeoutInput">localSsdRecoveryTimeoutInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.maintenanceIntervalInput">maintenanceIntervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.maxRunDurationInput">maxRunDurationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration">GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.minNodeCpusInput">minNodeCpusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.nodeAffinitiesInput">nodeAffinitiesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities">GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.onHostMaintenanceInput">onHostMaintenanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.onInstanceStopActionInput">onInstanceStopActionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction">GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.preemptibleInput">preemptibleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.provisioningModelInput">provisioningModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.automaticRestart">automaticRestart</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.hostErrorTimeoutSeconds">hostErrorTimeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.instanceTerminationAction">instanceTerminationAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.maintenanceInterval">maintenanceInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.minNodeCpus">minNodeCpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.onHostMaintenance">onHostMaintenance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.preemptible">preemptible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.provisioningModel">provisioningModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling">GoogleComputeInstanceFromMachineImageScheduling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `localSsdRecoveryTimeout`<sup>Required</sup> <a name="localSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.localSsdRecoveryTimeout"></a>

```java
public GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference getLocalSsdRecoveryTimeout();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference">GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference</a>

---

##### `maxRunDuration`<sup>Required</sup> <a name="maxRunDuration" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.maxRunDuration"></a>

```java
public GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference getMaxRunDuration();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference">GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference</a>

---

##### `nodeAffinities`<sup>Required</sup> <a name="nodeAffinities" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.nodeAffinities"></a>

```java
public GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList getNodeAffinities();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList">GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList</a>

---

##### `onInstanceStopAction`<sup>Required</sup> <a name="onInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.onInstanceStopAction"></a>

```java
public GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference getOnInstanceStopAction();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference">GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference</a>

---

##### `automaticRestartInput`<sup>Optional</sup> <a name="automaticRestartInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.automaticRestartInput"></a>

```java
public java.lang.Object getAutomaticRestartInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.availabilityDomainInput"></a>

```java
public java.lang.Number getAvailabilityDomainInput();
```

- *Type:* java.lang.Number

---

##### `hostErrorTimeoutSecondsInput`<sup>Optional</sup> <a name="hostErrorTimeoutSecondsInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.hostErrorTimeoutSecondsInput"></a>

```java
public java.lang.Number getHostErrorTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `instanceTerminationActionInput`<sup>Optional</sup> <a name="instanceTerminationActionInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.instanceTerminationActionInput"></a>

```java
public java.lang.String getInstanceTerminationActionInput();
```

- *Type:* java.lang.String

---

##### `localSsdRecoveryTimeoutInput`<sup>Optional</sup> <a name="localSsdRecoveryTimeoutInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.localSsdRecoveryTimeoutInput"></a>

```java
public GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout getLocalSsdRecoveryTimeoutInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout</a>

---

##### `maintenanceIntervalInput`<sup>Optional</sup> <a name="maintenanceIntervalInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.maintenanceIntervalInput"></a>

```java
public java.lang.String getMaintenanceIntervalInput();
```

- *Type:* java.lang.String

---

##### `maxRunDurationInput`<sup>Optional</sup> <a name="maxRunDurationInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.maxRunDurationInput"></a>

```java
public GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration getMaxRunDurationInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration">GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration</a>

---

##### `minNodeCpusInput`<sup>Optional</sup> <a name="minNodeCpusInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.minNodeCpusInput"></a>

```java
public java.lang.Number getMinNodeCpusInput();
```

- *Type:* java.lang.Number

---

##### `nodeAffinitiesInput`<sup>Optional</sup> <a name="nodeAffinitiesInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.nodeAffinitiesInput"></a>

```java
public java.lang.Object getNodeAffinitiesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities">GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities</a>>

---

##### `onHostMaintenanceInput`<sup>Optional</sup> <a name="onHostMaintenanceInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.onHostMaintenanceInput"></a>

```java
public java.lang.String getOnHostMaintenanceInput();
```

- *Type:* java.lang.String

---

##### `onInstanceStopActionInput`<sup>Optional</sup> <a name="onInstanceStopActionInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.onInstanceStopActionInput"></a>

```java
public GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction getOnInstanceStopActionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction">GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction</a>

---

##### `preemptibleInput`<sup>Optional</sup> <a name="preemptibleInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.preemptibleInput"></a>

```java
public java.lang.Object getPreemptibleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `provisioningModelInput`<sup>Optional</sup> <a name="provisioningModelInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.provisioningModelInput"></a>

```java
public java.lang.String getProvisioningModelInput();
```

- *Type:* java.lang.String

---

##### `automaticRestart`<sup>Required</sup> <a name="automaticRestart" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.automaticRestart"></a>

```java
public java.lang.Object getAutomaticRestart();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.availabilityDomain"></a>

```java
public java.lang.Number getAvailabilityDomain();
```

- *Type:* java.lang.Number

---

##### `hostErrorTimeoutSeconds`<sup>Required</sup> <a name="hostErrorTimeoutSeconds" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.hostErrorTimeoutSeconds"></a>

```java
public java.lang.Number getHostErrorTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `instanceTerminationAction`<sup>Required</sup> <a name="instanceTerminationAction" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.instanceTerminationAction"></a>

```java
public java.lang.String getInstanceTerminationAction();
```

- *Type:* java.lang.String

---

##### `maintenanceInterval`<sup>Required</sup> <a name="maintenanceInterval" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.maintenanceInterval"></a>

```java
public java.lang.String getMaintenanceInterval();
```

- *Type:* java.lang.String

---

##### `minNodeCpus`<sup>Required</sup> <a name="minNodeCpus" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.minNodeCpus"></a>

```java
public java.lang.Number getMinNodeCpus();
```

- *Type:* java.lang.Number

---

##### `onHostMaintenance`<sup>Required</sup> <a name="onHostMaintenance" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.onHostMaintenance"></a>

```java
public java.lang.String getOnHostMaintenance();
```

- *Type:* java.lang.String

---

##### `preemptible`<sup>Required</sup> <a name="preemptible" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.preemptible"></a>

```java
public java.lang.Object getPreemptible();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `provisioningModel`<sup>Required</sup> <a name="provisioningModel" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.provisioningModel"></a>

```java
public java.lang.String getProvisioningModel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.internalValue"></a>

```java
public GoogleComputeInstanceFromMachineImageScheduling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling">GoogleComputeInstanceFromMachineImageScheduling</a>

---


### GoogleComputeInstanceFromMachineImageScratchDiskList <a name="GoogleComputeInstanceFromMachineImageScratchDiskList" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageScratchDiskList;

new GoogleComputeInstanceFromMachineImageScratchDiskList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.get"></a>

```java
public GoogleComputeInstanceFromMachineImageScratchDiskOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeInstanceFromMachineImageScratchDiskOutputReference <a name="GoogleComputeInstanceFromMachineImageScratchDiskOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference;

new GoogleComputeInstanceFromMachineImageScratchDiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.property.interface">interface</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDisk">GoogleComputeInstanceFromMachineImageScratchDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.property.interface"></a>

```java
public java.lang.String getInterface();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.property.internalValue"></a>

```java
public GoogleComputeInstanceFromMachineImageScratchDisk getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDisk">GoogleComputeInstanceFromMachineImageScratchDisk</a>

---


### GoogleComputeInstanceFromMachineImageServiceAccountOutputReference <a name="GoogleComputeInstanceFromMachineImageServiceAccountOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference;

new GoogleComputeInstanceFromMachineImageServiceAccountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.resetEmail">resetEmail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.resetEmail"></a>

```java
public void resetEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccount">GoogleComputeInstanceFromMachineImageServiceAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.property.internalValue"></a>

```java
public GoogleComputeInstanceFromMachineImageServiceAccount getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccount">GoogleComputeInstanceFromMachineImageServiceAccount</a>

---


### GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference <a name="GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference;

new GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">resetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.resetEnableSecureBoot">resetEnableSecureBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.resetEnableVtpm">resetEnableVtpm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableIntegrityMonitoring` <a name="resetEnableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```java
public void resetEnableIntegrityMonitoring()
```

##### `resetEnableSecureBoot` <a name="resetEnableSecureBoot" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```java
public void resetEnableSecureBoot()
```

##### `resetEnableVtpm` <a name="resetEnableVtpm" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```java
public void resetEnableVtpm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">enableIntegrityMonitoringInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enableSecureBootInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.property.enableVtpmInput">enableVtpmInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.property.enableSecureBoot">enableSecureBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.property.enableVtpm">enableVtpm</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfig">GoogleComputeInstanceFromMachineImageShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableIntegrityMonitoringInput`<sup>Optional</sup> <a name="enableIntegrityMonitoringInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```java
public java.lang.Object getEnableIntegrityMonitoringInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableSecureBootInput`<sup>Optional</sup> <a name="enableSecureBootInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```java
public java.lang.Object getEnableSecureBootInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableVtpmInput`<sup>Optional</sup> <a name="enableVtpmInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```java
public java.lang.Object getEnableVtpmInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableIntegrityMonitoring`<sup>Required</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```java
public java.lang.Object getEnableIntegrityMonitoring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableSecureBoot`<sup>Required</sup> <a name="enableSecureBoot" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```java
public java.lang.Object getEnableSecureBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableVtpm`<sup>Required</sup> <a name="enableVtpm" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```java
public java.lang.Object getEnableVtpm();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.property.internalValue"></a>

```java
public GoogleComputeInstanceFromMachineImageShieldedInstanceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfig">GoogleComputeInstanceFromMachineImageShieldedInstanceConfig</a>

---


### GoogleComputeInstanceFromMachineImageTimeoutsOutputReference <a name="GoogleComputeInstanceFromMachineImageTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_instance_from_machine_image.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference;

new GoogleComputeInstanceFromMachineImageTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeouts">GoogleComputeInstanceFromMachineImageTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeouts">GoogleComputeInstanceFromMachineImageTimeouts</a>

---



