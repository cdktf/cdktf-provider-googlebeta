# `googleComputeMachineImage` Submodule <a name="`googleComputeMachineImage` Submodule" id="@cdktf/provider-google-beta.googleComputeMachineImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeMachineImage <a name="GoogleComputeMachineImage" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_machine_image google_compute_machine_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_machine_image.GoogleComputeMachineImage;

GoogleComputeMachineImage.Builder.create(Construct scope, java.lang.String id)
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
    .sourceInstance(java.lang.String)
//  .description(java.lang.String)
//  .guestFlush(java.lang.Boolean)
//  .guestFlush(IResolvable)
//  .id(java.lang.String)
//  .machineImageEncryptionKey(GoogleComputeMachineImageMachineImageEncryptionKey)
//  .project(java.lang.String)
//  .timeouts(GoogleComputeMachineImageTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.sourceInstance">sourceInstance</a></code> | <code>java.lang.String</code> | The source instance used to create the machine image. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A text description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.guestFlush">guestFlush</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specify this to create an application consistent machine image by informing the OS to prepare for the snapshot process. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_machine_image#id GoogleComputeMachineImage#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.machineImageEncryptionKey">machineImageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKey">GoogleComputeMachineImageMachineImageEncryptionKey</a></code> | machine_image_encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_machine_image#project GoogleComputeMachineImage#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeouts">GoogleComputeMachineImageTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_machine_image#name GoogleComputeMachineImage#name}

---

##### `sourceInstance`<sup>Required</sup> <a name="sourceInstance" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.sourceInstance"></a>

- *Type:* java.lang.String

The source instance used to create the machine image.

You can provide this as a partial or full URL to the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_machine_image#source_instance GoogleComputeMachineImage#source_instance}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_machine_image#description GoogleComputeMachineImage#description}

---

##### `guestFlush`<sup>Optional</sup> <a name="guestFlush" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.guestFlush"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specify this to create an application consistent machine image by informing the OS to prepare for the snapshot process.

Currently only supported on Windows instances using the Volume Shadow Copy Service (VSS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_machine_image#guest_flush GoogleComputeMachineImage#guest_flush}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_machine_image#id GoogleComputeMachineImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `machineImageEncryptionKey`<sup>Optional</sup> <a name="machineImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.machineImageEncryptionKey"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKey">GoogleComputeMachineImageMachineImageEncryptionKey</a>

machine_image_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_machine_image#machine_image_encryption_key GoogleComputeMachineImage#machine_image_encryption_key}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_machine_image#project GoogleComputeMachineImage#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeouts">GoogleComputeMachineImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_machine_image#timeouts GoogleComputeMachineImage#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.putMachineImageEncryptionKey">putMachineImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.resetGuestFlush">resetGuestFlush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.resetMachineImageEncryptionKey">resetMachineImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMachineImageEncryptionKey` <a name="putMachineImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.putMachineImageEncryptionKey"></a>

```java
public void putMachineImageEncryptionKey(GoogleComputeMachineImageMachineImageEncryptionKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.putMachineImageEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKey">GoogleComputeMachineImageMachineImageEncryptionKey</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeMachineImageTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeouts">GoogleComputeMachineImageTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGuestFlush` <a name="resetGuestFlush" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.resetGuestFlush"></a>

```java
public void resetGuestFlush()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.resetId"></a>

```java
public void resetId()
```

##### `resetMachineImageEncryptionKey` <a name="resetMachineImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.resetMachineImageEncryptionKey"></a>

```java
public void resetMachineImageEncryptionKey()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeMachineImage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_machine_image.GoogleComputeMachineImage;

GoogleComputeMachineImage.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_machine_image.GoogleComputeMachineImage;

GoogleComputeMachineImage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_machine_image.GoogleComputeMachineImage;

GoogleComputeMachineImage.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_machine_image.GoogleComputeMachineImage;

GoogleComputeMachineImage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeMachineImage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleComputeMachineImage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeMachineImage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeMachineImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_machine_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeMachineImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.machineImageEncryptionKey">machineImageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference">GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.storageLocations">storageLocations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference">GoogleComputeMachineImageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.guestFlushInput">guestFlushInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.machineImageEncryptionKeyInput">machineImageEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKey">GoogleComputeMachineImageMachineImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.sourceInstanceInput">sourceInstanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeouts">GoogleComputeMachineImageTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.guestFlush">guestFlush</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.sourceInstance">sourceInstance</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `machineImageEncryptionKey`<sup>Required</sup> <a name="machineImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.machineImageEncryptionKey"></a>

```java
public GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference getMachineImageEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference">GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `storageLocations`<sup>Required</sup> <a name="storageLocations" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.storageLocations"></a>

```java
public java.util.List<java.lang.String> getStorageLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.timeouts"></a>

```java
public GoogleComputeMachineImageTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference">GoogleComputeMachineImageTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `guestFlushInput`<sup>Optional</sup> <a name="guestFlushInput" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.guestFlushInput"></a>

```java
public java.lang.Object getGuestFlushInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `machineImageEncryptionKeyInput`<sup>Optional</sup> <a name="machineImageEncryptionKeyInput" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.machineImageEncryptionKeyInput"></a>

```java
public GoogleComputeMachineImageMachineImageEncryptionKey getMachineImageEncryptionKeyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKey">GoogleComputeMachineImageMachineImageEncryptionKey</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `sourceInstanceInput`<sup>Optional</sup> <a name="sourceInstanceInput" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.sourceInstanceInput"></a>

```java
public java.lang.String getSourceInstanceInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeouts">GoogleComputeMachineImageTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `guestFlush`<sup>Required</sup> <a name="guestFlush" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.guestFlush"></a>

```java
public java.lang.Object getGuestFlush();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `sourceInstance`<sup>Required</sup> <a name="sourceInstance" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.sourceInstance"></a>

```java
public java.lang.String getSourceInstance();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeMachineImageConfig <a name="GoogleComputeMachineImageConfig" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_machine_image.GoogleComputeMachineImageConfig;

GoogleComputeMachineImageConfig.builder()
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
    .sourceInstance(java.lang.String)
//  .description(java.lang.String)
//  .guestFlush(java.lang.Boolean)
//  .guestFlush(IResolvable)
//  .id(java.lang.String)
//  .machineImageEncryptionKey(GoogleComputeMachineImageMachineImageEncryptionKey)
//  .project(java.lang.String)
//  .timeouts(GoogleComputeMachineImageTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.sourceInstance">sourceInstance</a></code> | <code>java.lang.String</code> | The source instance used to create the machine image. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.description">description</a></code> | <code>java.lang.String</code> | A text description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.guestFlush">guestFlush</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specify this to create an application consistent machine image by informing the OS to prepare for the snapshot process. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_machine_image#id GoogleComputeMachineImage#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.machineImageEncryptionKey">machineImageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKey">GoogleComputeMachineImageMachineImageEncryptionKey</a></code> | machine_image_encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_machine_image#project GoogleComputeMachineImage#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeouts">GoogleComputeMachineImageTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_machine_image#name GoogleComputeMachineImage#name}

---

##### `sourceInstance`<sup>Required</sup> <a name="sourceInstance" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.sourceInstance"></a>

```java
public java.lang.String getSourceInstance();
```

- *Type:* java.lang.String

The source instance used to create the machine image.

You can provide this as a partial or full URL to the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_machine_image#source_instance GoogleComputeMachineImage#source_instance}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_machine_image#description GoogleComputeMachineImage#description}

---

##### `guestFlush`<sup>Optional</sup> <a name="guestFlush" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.guestFlush"></a>

```java
public java.lang.Object getGuestFlush();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specify this to create an application consistent machine image by informing the OS to prepare for the snapshot process.

Currently only supported on Windows instances using the Volume Shadow Copy Service (VSS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_machine_image#guest_flush GoogleComputeMachineImage#guest_flush}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_machine_image#id GoogleComputeMachineImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `machineImageEncryptionKey`<sup>Optional</sup> <a name="machineImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.machineImageEncryptionKey"></a>

```java
public GoogleComputeMachineImageMachineImageEncryptionKey getMachineImageEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKey">GoogleComputeMachineImageMachineImageEncryptionKey</a>

machine_image_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_machine_image#machine_image_encryption_key GoogleComputeMachineImage#machine_image_encryption_key}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_machine_image#project GoogleComputeMachineImage#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.timeouts"></a>

```java
public GoogleComputeMachineImageTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeouts">GoogleComputeMachineImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_machine_image#timeouts GoogleComputeMachineImage#timeouts}

---

### GoogleComputeMachineImageMachineImageEncryptionKey <a name="GoogleComputeMachineImageMachineImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_machine_image.GoogleComputeMachineImageMachineImageEncryptionKey;

GoogleComputeMachineImageMachineImageEncryptionKey.builder()
//  .kmsKeyName(java.lang.String)
//  .kmsKeyServiceAccount(java.lang.String)
//  .rawKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKey.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The name of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKey.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>java.lang.String</code> | The service account used for the encryption request for the given KMS key. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKey.property.rawKey">rawKey</a></code> | <code>java.lang.String</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKey.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

The name of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_machine_image#kms_key_name GoogleComputeMachineImage#kms_key_name}

---

##### `kmsKeyServiceAccount`<sup>Optional</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKey.property.kmsKeyServiceAccount"></a>

```java
public java.lang.String getKmsKeyServiceAccount();
```

- *Type:* java.lang.String

The service account used for the encryption request for the given KMS key.

If absent, the Compute Engine Service Agent service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_machine_image#kms_key_service_account GoogleComputeMachineImage#kms_key_service_account}

---

##### `rawKey`<sup>Optional</sup> <a name="rawKey" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKey.property.rawKey"></a>

```java
public java.lang.String getRawKey();
```

- *Type:* java.lang.String

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_machine_image#raw_key GoogleComputeMachineImage#raw_key}

---

### GoogleComputeMachineImageTimeouts <a name="GoogleComputeMachineImageTimeouts" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_machine_image.GoogleComputeMachineImageTimeouts;

GoogleComputeMachineImageTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_machine_image#create GoogleComputeMachineImage#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_machine_image#delete GoogleComputeMachineImage#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_machine_image#create GoogleComputeMachineImage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_machine_image#delete GoogleComputeMachineImage#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference <a name="GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_machine_image.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference;

new GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount">resetKmsKeyServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.resetRawKey">resetRawKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.resetKmsKeyName"></a>

```java
public void resetKmsKeyName()
```

##### `resetKmsKeyServiceAccount` <a name="resetKmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```java
public void resetKmsKeyServiceAccount()
```

##### `resetRawKey` <a name="resetRawKey" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.resetRawKey"></a>

```java
public void resetRawKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.sha256">sha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kmsKeyServiceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.rawKeyInput">rawKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.rawKey">rawKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKey">GoogleComputeMachineImageMachineImageEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.sha256"></a>

```java
public java.lang.String getSha256();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyServiceAccountInput`<sup>Optional</sup> <a name="kmsKeyServiceAccountInput" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```java
public java.lang.String getKmsKeyServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `rawKeyInput`<sup>Optional</sup> <a name="rawKeyInput" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.rawKeyInput"></a>

```java
public java.lang.String getRawKeyInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `kmsKeyServiceAccount`<sup>Required</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```java
public java.lang.String getKmsKeyServiceAccount();
```

- *Type:* java.lang.String

---

##### `rawKey`<sup>Required</sup> <a name="rawKey" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.rawKey"></a>

```java
public java.lang.String getRawKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.internalValue"></a>

```java
public GoogleComputeMachineImageMachineImageEncryptionKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKey">GoogleComputeMachineImageMachineImageEncryptionKey</a>

---


### GoogleComputeMachineImageTimeoutsOutputReference <a name="GoogleComputeMachineImageTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_machine_image.GoogleComputeMachineImageTimeoutsOutputReference;

new GoogleComputeMachineImageTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeouts">GoogleComputeMachineImageTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeouts">GoogleComputeMachineImageTimeouts</a>

---



