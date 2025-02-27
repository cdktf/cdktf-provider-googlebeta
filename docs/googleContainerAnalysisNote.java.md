# `googleContainerAnalysisNote` Submodule <a name="`googleContainerAnalysisNote` Submodule" id="@cdktf/provider-google-beta.googleContainerAnalysisNote"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContainerAnalysisNote <a name="GoogleContainerAnalysisNote" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_analysis_note google_container_analysis_note}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_analysis_note.GoogleContainerAnalysisNote;

GoogleContainerAnalysisNote.Builder.create(Construct scope, java.lang.String id)
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
    .attestationAuthority(GoogleContainerAnalysisNoteAttestationAuthority)
    .name(java.lang.String)
//  .expirationTime(java.lang.String)
//  .id(java.lang.String)
//  .longDescription(java.lang.String)
//  .project(java.lang.String)
//  .relatedNoteNames(java.util.List<java.lang.String>)
//  .relatedUrl(IResolvable)
//  .relatedUrl(java.util.List<GoogleContainerAnalysisNoteRelatedUrl>)
//  .shortDescription(java.lang.String)
//  .timeouts(GoogleContainerAnalysisNoteTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.attestationAuthority">attestationAuthority</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority">GoogleContainerAnalysisNoteAttestationAuthority</a></code> | attestation_authority block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the note. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.expirationTime">expirationTime</a></code> | <code>java.lang.String</code> | Time of expiration for this note. Leave empty if note does not expire. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_analysis_note#id GoogleContainerAnalysisNote#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.longDescription">longDescription</a></code> | <code>java.lang.String</code> | A detailed description of the note. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_analysis_note#project GoogleContainerAnalysisNote#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.relatedNoteNames">relatedNoteNames</a></code> | <code>java.util.List<java.lang.String></code> | Names of other notes related to this note. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.relatedUrl">relatedUrl</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl">GoogleContainerAnalysisNoteRelatedUrl</a>></code> | related_url block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.shortDescription">shortDescription</a></code> | <code>java.lang.String</code> | A one sentence description of the note. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts">GoogleContainerAnalysisNoteTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `attestationAuthority`<sup>Required</sup> <a name="attestationAuthority" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.attestationAuthority"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority">GoogleContainerAnalysisNoteAttestationAuthority</a>

attestation_authority block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_analysis_note#attestation_authority GoogleContainerAnalysisNote#attestation_authority}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_analysis_note#name GoogleContainerAnalysisNote#name}

---

##### `expirationTime`<sup>Optional</sup> <a name="expirationTime" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.expirationTime"></a>

- *Type:* java.lang.String

Time of expiration for this note. Leave empty if note does not expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_analysis_note#expiration_time GoogleContainerAnalysisNote#expiration_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_analysis_note#id GoogleContainerAnalysisNote#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `longDescription`<sup>Optional</sup> <a name="longDescription" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.longDescription"></a>

- *Type:* java.lang.String

A detailed description of the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_analysis_note#long_description GoogleContainerAnalysisNote#long_description}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_analysis_note#project GoogleContainerAnalysisNote#project}.

---

##### `relatedNoteNames`<sup>Optional</sup> <a name="relatedNoteNames" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.relatedNoteNames"></a>

- *Type:* java.util.List<java.lang.String>

Names of other notes related to this note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_analysis_note#related_note_names GoogleContainerAnalysisNote#related_note_names}

---

##### `relatedUrl`<sup>Optional</sup> <a name="relatedUrl" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.relatedUrl"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl">GoogleContainerAnalysisNoteRelatedUrl</a>>

related_url block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_analysis_note#related_url GoogleContainerAnalysisNote#related_url}

---

##### `shortDescription`<sup>Optional</sup> <a name="shortDescription" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.shortDescription"></a>

- *Type:* java.lang.String

A one sentence description of the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_analysis_note#short_description GoogleContainerAnalysisNote#short_description}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts">GoogleContainerAnalysisNoteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_analysis_note#timeouts GoogleContainerAnalysisNote#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.putAttestationAuthority">putAttestationAuthority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.putRelatedUrl">putRelatedUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetExpirationTime">resetExpirationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetLongDescription">resetLongDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetRelatedNoteNames">resetRelatedNoteNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetRelatedUrl">resetRelatedUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetShortDescription">resetShortDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttestationAuthority` <a name="putAttestationAuthority" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.putAttestationAuthority"></a>

```java
public void putAttestationAuthority(GoogleContainerAnalysisNoteAttestationAuthority value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.putAttestationAuthority.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority">GoogleContainerAnalysisNoteAttestationAuthority</a>

---

##### `putRelatedUrl` <a name="putRelatedUrl" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.putRelatedUrl"></a>

```java
public void putRelatedUrl(IResolvable OR java.util.List<GoogleContainerAnalysisNoteRelatedUrl> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.putRelatedUrl.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl">GoogleContainerAnalysisNoteRelatedUrl</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.putTimeouts"></a>

```java
public void putTimeouts(GoogleContainerAnalysisNoteTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts">GoogleContainerAnalysisNoteTimeouts</a>

---

##### `resetExpirationTime` <a name="resetExpirationTime" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetExpirationTime"></a>

```java
public void resetExpirationTime()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetId"></a>

```java
public void resetId()
```

##### `resetLongDescription` <a name="resetLongDescription" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetLongDescription"></a>

```java
public void resetLongDescription()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetProject"></a>

```java
public void resetProject()
```

##### `resetRelatedNoteNames` <a name="resetRelatedNoteNames" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetRelatedNoteNames"></a>

```java
public void resetRelatedNoteNames()
```

##### `resetRelatedUrl` <a name="resetRelatedUrl" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetRelatedUrl"></a>

```java
public void resetRelatedUrl()
```

##### `resetShortDescription` <a name="resetShortDescription" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetShortDescription"></a>

```java
public void resetShortDescription()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleContainerAnalysisNote resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_analysis_note.GoogleContainerAnalysisNote;

GoogleContainerAnalysisNote.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_analysis_note.GoogleContainerAnalysisNote;

GoogleContainerAnalysisNote.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_analysis_note.GoogleContainerAnalysisNote;

GoogleContainerAnalysisNote.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_analysis_note.GoogleContainerAnalysisNote;

GoogleContainerAnalysisNote.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleContainerAnalysisNote.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleContainerAnalysisNote resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleContainerAnalysisNote to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleContainerAnalysisNote that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_analysis_note#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleContainerAnalysisNote to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.attestationAuthority">attestationAuthority</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference">GoogleContainerAnalysisNoteAttestationAuthorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.relatedUrl">relatedUrl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList">GoogleContainerAnalysisNoteRelatedUrlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference">GoogleContainerAnalysisNoteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.attestationAuthorityInput">attestationAuthorityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority">GoogleContainerAnalysisNoteAttestationAuthority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.expirationTimeInput">expirationTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.longDescriptionInput">longDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.relatedNoteNamesInput">relatedNoteNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.relatedUrlInput">relatedUrlInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl">GoogleContainerAnalysisNoteRelatedUrl</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.shortDescriptionInput">shortDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts">GoogleContainerAnalysisNoteTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.expirationTime">expirationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.longDescription">longDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.relatedNoteNames">relatedNoteNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.shortDescription">shortDescription</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `attestationAuthority`<sup>Required</sup> <a name="attestationAuthority" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.attestationAuthority"></a>

```java
public GoogleContainerAnalysisNoteAttestationAuthorityOutputReference getAttestationAuthority();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference">GoogleContainerAnalysisNoteAttestationAuthorityOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `relatedUrl`<sup>Required</sup> <a name="relatedUrl" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.relatedUrl"></a>

```java
public GoogleContainerAnalysisNoteRelatedUrlList getRelatedUrl();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList">GoogleContainerAnalysisNoteRelatedUrlList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.timeouts"></a>

```java
public GoogleContainerAnalysisNoteTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference">GoogleContainerAnalysisNoteTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `attestationAuthorityInput`<sup>Optional</sup> <a name="attestationAuthorityInput" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.attestationAuthorityInput"></a>

```java
public GoogleContainerAnalysisNoteAttestationAuthority getAttestationAuthorityInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority">GoogleContainerAnalysisNoteAttestationAuthority</a>

---

##### `expirationTimeInput`<sup>Optional</sup> <a name="expirationTimeInput" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.expirationTimeInput"></a>

```java
public java.lang.String getExpirationTimeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `longDescriptionInput`<sup>Optional</sup> <a name="longDescriptionInput" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.longDescriptionInput"></a>

```java
public java.lang.String getLongDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `relatedNoteNamesInput`<sup>Optional</sup> <a name="relatedNoteNamesInput" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.relatedNoteNamesInput"></a>

```java
public java.util.List<java.lang.String> getRelatedNoteNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `relatedUrlInput`<sup>Optional</sup> <a name="relatedUrlInput" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.relatedUrlInput"></a>

```java
public java.lang.Object getRelatedUrlInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl">GoogleContainerAnalysisNoteRelatedUrl</a>>

---

##### `shortDescriptionInput`<sup>Optional</sup> <a name="shortDescriptionInput" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.shortDescriptionInput"></a>

```java
public java.lang.String getShortDescriptionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts">GoogleContainerAnalysisNoteTimeouts</a>

---

##### `expirationTime`<sup>Required</sup> <a name="expirationTime" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.expirationTime"></a>

```java
public java.lang.String getExpirationTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `longDescription`<sup>Required</sup> <a name="longDescription" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.longDescription"></a>

```java
public java.lang.String getLongDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `relatedNoteNames`<sup>Required</sup> <a name="relatedNoteNames" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.relatedNoteNames"></a>

```java
public java.util.List<java.lang.String> getRelatedNoteNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `shortDescription`<sup>Required</sup> <a name="shortDescription" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.shortDescription"></a>

```java
public java.lang.String getShortDescription();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContainerAnalysisNoteAttestationAuthority <a name="GoogleContainerAnalysisNoteAttestationAuthority" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_analysis_note.GoogleContainerAnalysisNoteAttestationAuthority;

GoogleContainerAnalysisNoteAttestationAuthority.builder()
    .hint(GoogleContainerAnalysisNoteAttestationAuthorityHint)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority.property.hint">hint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHint">GoogleContainerAnalysisNoteAttestationAuthorityHint</a></code> | hint block. |

---

##### `hint`<sup>Required</sup> <a name="hint" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority.property.hint"></a>

```java
public GoogleContainerAnalysisNoteAttestationAuthorityHint getHint();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHint">GoogleContainerAnalysisNoteAttestationAuthorityHint</a>

hint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_analysis_note#hint GoogleContainerAnalysisNote#hint}

---

### GoogleContainerAnalysisNoteAttestationAuthorityHint <a name="GoogleContainerAnalysisNoteAttestationAuthorityHint" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_analysis_note.GoogleContainerAnalysisNoteAttestationAuthorityHint;

GoogleContainerAnalysisNoteAttestationAuthorityHint.builder()
    .humanReadableName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHint.property.humanReadableName">humanReadableName</a></code> | <code>java.lang.String</code> | The human readable name of this Attestation Authority, for example "qa". |

---

##### `humanReadableName`<sup>Required</sup> <a name="humanReadableName" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHint.property.humanReadableName"></a>

```java
public java.lang.String getHumanReadableName();
```

- *Type:* java.lang.String

The human readable name of this Attestation Authority, for example "qa".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_analysis_note#human_readable_name GoogleContainerAnalysisNote#human_readable_name}

---

### GoogleContainerAnalysisNoteConfig <a name="GoogleContainerAnalysisNoteConfig" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_analysis_note.GoogleContainerAnalysisNoteConfig;

GoogleContainerAnalysisNoteConfig.builder()
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
    .attestationAuthority(GoogleContainerAnalysisNoteAttestationAuthority)
    .name(java.lang.String)
//  .expirationTime(java.lang.String)
//  .id(java.lang.String)
//  .longDescription(java.lang.String)
//  .project(java.lang.String)
//  .relatedNoteNames(java.util.List<java.lang.String>)
//  .relatedUrl(IResolvable)
//  .relatedUrl(java.util.List<GoogleContainerAnalysisNoteRelatedUrl>)
//  .shortDescription(java.lang.String)
//  .timeouts(GoogleContainerAnalysisNoteTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.attestationAuthority">attestationAuthority</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority">GoogleContainerAnalysisNoteAttestationAuthority</a></code> | attestation_authority block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the note. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.expirationTime">expirationTime</a></code> | <code>java.lang.String</code> | Time of expiration for this note. Leave empty if note does not expire. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_analysis_note#id GoogleContainerAnalysisNote#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.longDescription">longDescription</a></code> | <code>java.lang.String</code> | A detailed description of the note. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_analysis_note#project GoogleContainerAnalysisNote#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.relatedNoteNames">relatedNoteNames</a></code> | <code>java.util.List<java.lang.String></code> | Names of other notes related to this note. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.relatedUrl">relatedUrl</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl">GoogleContainerAnalysisNoteRelatedUrl</a>></code> | related_url block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.shortDescription">shortDescription</a></code> | <code>java.lang.String</code> | A one sentence description of the note. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts">GoogleContainerAnalysisNoteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `attestationAuthority`<sup>Required</sup> <a name="attestationAuthority" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.attestationAuthority"></a>

```java
public GoogleContainerAnalysisNoteAttestationAuthority getAttestationAuthority();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority">GoogleContainerAnalysisNoteAttestationAuthority</a>

attestation_authority block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_analysis_note#attestation_authority GoogleContainerAnalysisNote#attestation_authority}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_analysis_note#name GoogleContainerAnalysisNote#name}

---

##### `expirationTime`<sup>Optional</sup> <a name="expirationTime" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.expirationTime"></a>

```java
public java.lang.String getExpirationTime();
```

- *Type:* java.lang.String

Time of expiration for this note. Leave empty if note does not expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_analysis_note#expiration_time GoogleContainerAnalysisNote#expiration_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_analysis_note#id GoogleContainerAnalysisNote#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `longDescription`<sup>Optional</sup> <a name="longDescription" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.longDescription"></a>

```java
public java.lang.String getLongDescription();
```

- *Type:* java.lang.String

A detailed description of the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_analysis_note#long_description GoogleContainerAnalysisNote#long_description}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_analysis_note#project GoogleContainerAnalysisNote#project}.

---

##### `relatedNoteNames`<sup>Optional</sup> <a name="relatedNoteNames" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.relatedNoteNames"></a>

```java
public java.util.List<java.lang.String> getRelatedNoteNames();
```

- *Type:* java.util.List<java.lang.String>

Names of other notes related to this note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_analysis_note#related_note_names GoogleContainerAnalysisNote#related_note_names}

---

##### `relatedUrl`<sup>Optional</sup> <a name="relatedUrl" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.relatedUrl"></a>

```java
public java.lang.Object getRelatedUrl();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl">GoogleContainerAnalysisNoteRelatedUrl</a>>

related_url block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_analysis_note#related_url GoogleContainerAnalysisNote#related_url}

---

##### `shortDescription`<sup>Optional</sup> <a name="shortDescription" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.shortDescription"></a>

```java
public java.lang.String getShortDescription();
```

- *Type:* java.lang.String

A one sentence description of the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_analysis_note#short_description GoogleContainerAnalysisNote#short_description}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.timeouts"></a>

```java
public GoogleContainerAnalysisNoteTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts">GoogleContainerAnalysisNoteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_analysis_note#timeouts GoogleContainerAnalysisNote#timeouts}

---

### GoogleContainerAnalysisNoteRelatedUrl <a name="GoogleContainerAnalysisNoteRelatedUrl" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_analysis_note.GoogleContainerAnalysisNoteRelatedUrl;

GoogleContainerAnalysisNoteRelatedUrl.builder()
    .url(java.lang.String)
//  .label(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl.property.url">url</a></code> | <code>java.lang.String</code> | Specific URL associated with the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl.property.label">label</a></code> | <code>java.lang.String</code> | Label to describe usage of the URL. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Specific URL associated with the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_analysis_note#url GoogleContainerAnalysisNote#url}

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Label to describe usage of the URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_analysis_note#label GoogleContainerAnalysisNote#label}

---

### GoogleContainerAnalysisNoteTimeouts <a name="GoogleContainerAnalysisNoteTimeouts" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_analysis_note.GoogleContainerAnalysisNoteTimeouts;

GoogleContainerAnalysisNoteTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_analysis_note#create GoogleContainerAnalysisNote#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_analysis_note#delete GoogleContainerAnalysisNote#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_analysis_note#update GoogleContainerAnalysisNote#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_analysis_note#create GoogleContainerAnalysisNote#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_analysis_note#delete GoogleContainerAnalysisNote#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_container_analysis_note#update GoogleContainerAnalysisNote#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference <a name="GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_analysis_note.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference;

new GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.humanReadableNameInput">humanReadableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.humanReadableName">humanReadableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHint">GoogleContainerAnalysisNoteAttestationAuthorityHint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `humanReadableNameInput`<sup>Optional</sup> <a name="humanReadableNameInput" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.humanReadableNameInput"></a>

```java
public java.lang.String getHumanReadableNameInput();
```

- *Type:* java.lang.String

---

##### `humanReadableName`<sup>Required</sup> <a name="humanReadableName" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.humanReadableName"></a>

```java
public java.lang.String getHumanReadableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.internalValue"></a>

```java
public GoogleContainerAnalysisNoteAttestationAuthorityHint getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHint">GoogleContainerAnalysisNoteAttestationAuthorityHint</a>

---


### GoogleContainerAnalysisNoteAttestationAuthorityOutputReference <a name="GoogleContainerAnalysisNoteAttestationAuthorityOutputReference" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_analysis_note.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference;

new GoogleContainerAnalysisNoteAttestationAuthorityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.putHint">putHint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHint` <a name="putHint" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.putHint"></a>

```java
public void putHint(GoogleContainerAnalysisNoteAttestationAuthorityHint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.putHint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHint">GoogleContainerAnalysisNoteAttestationAuthorityHint</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.property.hint">hint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference">GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.property.hintInput">hintInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHint">GoogleContainerAnalysisNoteAttestationAuthorityHint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority">GoogleContainerAnalysisNoteAttestationAuthority</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hint`<sup>Required</sup> <a name="hint" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.property.hint"></a>

```java
public GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference getHint();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference">GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference</a>

---

##### `hintInput`<sup>Optional</sup> <a name="hintInput" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.property.hintInput"></a>

```java
public GoogleContainerAnalysisNoteAttestationAuthorityHint getHintInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHint">GoogleContainerAnalysisNoteAttestationAuthorityHint</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.property.internalValue"></a>

```java
public GoogleContainerAnalysisNoteAttestationAuthority getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority">GoogleContainerAnalysisNoteAttestationAuthority</a>

---


### GoogleContainerAnalysisNoteRelatedUrlList <a name="GoogleContainerAnalysisNoteRelatedUrlList" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_analysis_note.GoogleContainerAnalysisNoteRelatedUrlList;

new GoogleContainerAnalysisNoteRelatedUrlList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.get"></a>

```java
public GoogleContainerAnalysisNoteRelatedUrlOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl">GoogleContainerAnalysisNoteRelatedUrl</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl">GoogleContainerAnalysisNoteRelatedUrl</a>>

---


### GoogleContainerAnalysisNoteRelatedUrlOutputReference <a name="GoogleContainerAnalysisNoteRelatedUrlOutputReference" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_analysis_note.GoogleContainerAnalysisNoteRelatedUrlOutputReference;

new GoogleContainerAnalysisNoteRelatedUrlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.resetLabel">resetLabel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.resetLabel"></a>

```java
public void resetLabel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl">GoogleContainerAnalysisNoteRelatedUrl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl">GoogleContainerAnalysisNoteRelatedUrl</a>

---


### GoogleContainerAnalysisNoteTimeoutsOutputReference <a name="GoogleContainerAnalysisNoteTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_analysis_note.GoogleContainerAnalysisNoteTimeoutsOutputReference;

new GoogleContainerAnalysisNoteTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts">GoogleContainerAnalysisNoteTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts">GoogleContainerAnalysisNoteTimeouts</a>

---



