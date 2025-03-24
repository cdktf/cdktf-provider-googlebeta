# `googleKmsKeyRingImportJob` Submodule <a name="`googleKmsKeyRingImportJob` Submodule" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleKmsKeyRingImportJob <a name="GoogleKmsKeyRingImportJob" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_kms_key_ring_import_job google_kms_key_ring_import_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_key_ring_import_job.GoogleKmsKeyRingImportJob;

GoogleKmsKeyRingImportJob.Builder.create(Construct scope, java.lang.String id)
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
    .importJobId(java.lang.String)
    .importMethod(java.lang.String)
    .keyRing(java.lang.String)
    .protectionLevel(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleKmsKeyRingImportJobTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer.parameter.importJobId">importJobId</a></code> | <code>java.lang.String</code> | It must be unique within a KeyRing and match the regular expression [a-zA-Z0-9_-]{1,63}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer.parameter.importMethod">importMethod</a></code> | <code>java.lang.String</code> | The wrapping method to be used for incoming key material. Possible values: ["RSA_OAEP_3072_SHA1_AES_256", "RSA_OAEP_4096_SHA1_AES_256"]. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer.parameter.keyRing">keyRing</a></code> | <code>java.lang.String</code> | The KeyRing that this import job belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer.parameter.protectionLevel">protectionLevel</a></code> | <code>java.lang.String</code> | The protection level of the ImportJob. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_kms_key_ring_import_job#id GoogleKmsKeyRingImportJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeouts">GoogleKmsKeyRingImportJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `importJobId`<sup>Required</sup> <a name="importJobId" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer.parameter.importJobId"></a>

- *Type:* java.lang.String

It must be unique within a KeyRing and match the regular expression [a-zA-Z0-9_-]{1,63}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_kms_key_ring_import_job#import_job_id GoogleKmsKeyRingImportJob#import_job_id}

---

##### `importMethod`<sup>Required</sup> <a name="importMethod" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer.parameter.importMethod"></a>

- *Type:* java.lang.String

The wrapping method to be used for incoming key material. Possible values: ["RSA_OAEP_3072_SHA1_AES_256", "RSA_OAEP_4096_SHA1_AES_256"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_kms_key_ring_import_job#import_method GoogleKmsKeyRingImportJob#import_method}

---

##### `keyRing`<sup>Required</sup> <a name="keyRing" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer.parameter.keyRing"></a>

- *Type:* java.lang.String

The KeyRing that this import job belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_kms_key_ring_import_job#key_ring GoogleKmsKeyRingImportJob#key_ring}

---

##### `protectionLevel`<sup>Required</sup> <a name="protectionLevel" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer.parameter.protectionLevel"></a>

- *Type:* java.lang.String

The protection level of the ImportJob.

This must match the protectionLevel of the
versionTemplate on the CryptoKey you attempt to import into. Possible values: ["SOFTWARE", "HSM", "EXTERNAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_kms_key_ring_import_job#protection_level GoogleKmsKeyRingImportJob#protection_level}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_kms_key_ring_import_job#id GoogleKmsKeyRingImportJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeouts">GoogleKmsKeyRingImportJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_kms_key_ring_import_job#timeouts GoogleKmsKeyRingImportJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.putTimeouts"></a>

```java
public void putTimeouts(GoogleKmsKeyRingImportJobTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeouts">GoogleKmsKeyRingImportJobTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleKmsKeyRingImportJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_key_ring_import_job.GoogleKmsKeyRingImportJob;

GoogleKmsKeyRingImportJob.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_key_ring_import_job.GoogleKmsKeyRingImportJob;

GoogleKmsKeyRingImportJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_key_ring_import_job.GoogleKmsKeyRingImportJob;

GoogleKmsKeyRingImportJob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_key_ring_import_job.GoogleKmsKeyRingImportJob;

GoogleKmsKeyRingImportJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleKmsKeyRingImportJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleKmsKeyRingImportJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleKmsKeyRingImportJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleKmsKeyRingImportJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_kms_key_ring_import_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleKmsKeyRingImportJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.attestation">attestation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList">GoogleKmsKeyRingImportJobAttestationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.publicKey">publicKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList">GoogleKmsKeyRingImportJobPublicKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference">GoogleKmsKeyRingImportJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.importJobIdInput">importJobIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.importMethodInput">importMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.keyRingInput">keyRingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.protectionLevelInput">protectionLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeouts">GoogleKmsKeyRingImportJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.importJobId">importJobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.importMethod">importMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.keyRing">keyRing</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.protectionLevel">protectionLevel</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `attestation`<sup>Required</sup> <a name="attestation" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.attestation"></a>

```java
public GoogleKmsKeyRingImportJobAttestationList getAttestation();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList">GoogleKmsKeyRingImportJobAttestationList</a>

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.publicKey"></a>

```java
public GoogleKmsKeyRingImportJobPublicKeyList getPublicKey();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList">GoogleKmsKeyRingImportJobPublicKeyList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.timeouts"></a>

```java
public GoogleKmsKeyRingImportJobTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference">GoogleKmsKeyRingImportJobTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `importJobIdInput`<sup>Optional</sup> <a name="importJobIdInput" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.importJobIdInput"></a>

```java
public java.lang.String getImportJobIdInput();
```

- *Type:* java.lang.String

---

##### `importMethodInput`<sup>Optional</sup> <a name="importMethodInput" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.importMethodInput"></a>

```java
public java.lang.String getImportMethodInput();
```

- *Type:* java.lang.String

---

##### `keyRingInput`<sup>Optional</sup> <a name="keyRingInput" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.keyRingInput"></a>

```java
public java.lang.String getKeyRingInput();
```

- *Type:* java.lang.String

---

##### `protectionLevelInput`<sup>Optional</sup> <a name="protectionLevelInput" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.protectionLevelInput"></a>

```java
public java.lang.String getProtectionLevelInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeouts">GoogleKmsKeyRingImportJobTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `importJobId`<sup>Required</sup> <a name="importJobId" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.importJobId"></a>

```java
public java.lang.String getImportJobId();
```

- *Type:* java.lang.String

---

##### `importMethod`<sup>Required</sup> <a name="importMethod" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.importMethod"></a>

```java
public java.lang.String getImportMethod();
```

- *Type:* java.lang.String

---

##### `keyRing`<sup>Required</sup> <a name="keyRing" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.keyRing"></a>

```java
public java.lang.String getKeyRing();
```

- *Type:* java.lang.String

---

##### `protectionLevel`<sup>Required</sup> <a name="protectionLevel" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.protectionLevel"></a>

```java
public java.lang.String getProtectionLevel();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleKmsKeyRingImportJobAttestation <a name="GoogleKmsKeyRingImportJobAttestation" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_key_ring_import_job.GoogleKmsKeyRingImportJobAttestation;

GoogleKmsKeyRingImportJobAttestation.builder()
    .build();
```


### GoogleKmsKeyRingImportJobConfig <a name="GoogleKmsKeyRingImportJobConfig" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_key_ring_import_job.GoogleKmsKeyRingImportJobConfig;

GoogleKmsKeyRingImportJobConfig.builder()
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
    .importJobId(java.lang.String)
    .importMethod(java.lang.String)
    .keyRing(java.lang.String)
    .protectionLevel(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleKmsKeyRingImportJobTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.importJobId">importJobId</a></code> | <code>java.lang.String</code> | It must be unique within a KeyRing and match the regular expression [a-zA-Z0-9_-]{1,63}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.importMethod">importMethod</a></code> | <code>java.lang.String</code> | The wrapping method to be used for incoming key material. Possible values: ["RSA_OAEP_3072_SHA1_AES_256", "RSA_OAEP_4096_SHA1_AES_256"]. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.keyRing">keyRing</a></code> | <code>java.lang.String</code> | The KeyRing that this import job belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.protectionLevel">protectionLevel</a></code> | <code>java.lang.String</code> | The protection level of the ImportJob. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_kms_key_ring_import_job#id GoogleKmsKeyRingImportJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeouts">GoogleKmsKeyRingImportJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `importJobId`<sup>Required</sup> <a name="importJobId" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.importJobId"></a>

```java
public java.lang.String getImportJobId();
```

- *Type:* java.lang.String

It must be unique within a KeyRing and match the regular expression [a-zA-Z0-9_-]{1,63}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_kms_key_ring_import_job#import_job_id GoogleKmsKeyRingImportJob#import_job_id}

---

##### `importMethod`<sup>Required</sup> <a name="importMethod" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.importMethod"></a>

```java
public java.lang.String getImportMethod();
```

- *Type:* java.lang.String

The wrapping method to be used for incoming key material. Possible values: ["RSA_OAEP_3072_SHA1_AES_256", "RSA_OAEP_4096_SHA1_AES_256"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_kms_key_ring_import_job#import_method GoogleKmsKeyRingImportJob#import_method}

---

##### `keyRing`<sup>Required</sup> <a name="keyRing" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.keyRing"></a>

```java
public java.lang.String getKeyRing();
```

- *Type:* java.lang.String

The KeyRing that this import job belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_kms_key_ring_import_job#key_ring GoogleKmsKeyRingImportJob#key_ring}

---

##### `protectionLevel`<sup>Required</sup> <a name="protectionLevel" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.protectionLevel"></a>

```java
public java.lang.String getProtectionLevel();
```

- *Type:* java.lang.String

The protection level of the ImportJob.

This must match the protectionLevel of the
versionTemplate on the CryptoKey you attempt to import into. Possible values: ["SOFTWARE", "HSM", "EXTERNAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_kms_key_ring_import_job#protection_level GoogleKmsKeyRingImportJob#protection_level}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_kms_key_ring_import_job#id GoogleKmsKeyRingImportJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobConfig.property.timeouts"></a>

```java
public GoogleKmsKeyRingImportJobTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeouts">GoogleKmsKeyRingImportJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_kms_key_ring_import_job#timeouts GoogleKmsKeyRingImportJob#timeouts}

---

### GoogleKmsKeyRingImportJobPublicKey <a name="GoogleKmsKeyRingImportJobPublicKey" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_key_ring_import_job.GoogleKmsKeyRingImportJobPublicKey;

GoogleKmsKeyRingImportJobPublicKey.builder()
    .build();
```


### GoogleKmsKeyRingImportJobTimeouts <a name="GoogleKmsKeyRingImportJobTimeouts" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_key_ring_import_job.GoogleKmsKeyRingImportJobTimeouts;

GoogleKmsKeyRingImportJobTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_kms_key_ring_import_job#create GoogleKmsKeyRingImportJob#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_kms_key_ring_import_job#delete GoogleKmsKeyRingImportJob#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_kms_key_ring_import_job#create GoogleKmsKeyRingImportJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_kms_key_ring_import_job#delete GoogleKmsKeyRingImportJob#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleKmsKeyRingImportJobAttestationList <a name="GoogleKmsKeyRingImportJobAttestationList" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_key_ring_import_job.GoogleKmsKeyRingImportJobAttestationList;

new GoogleKmsKeyRingImportJobAttestationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.get"></a>

```java
public GoogleKmsKeyRingImportJobAttestationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleKmsKeyRingImportJobAttestationOutputReference <a name="GoogleKmsKeyRingImportJobAttestationOutputReference" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_key_ring_import_job.GoogleKmsKeyRingImportJobAttestationOutputReference;

new GoogleKmsKeyRingImportJobAttestationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestation">GoogleKmsKeyRingImportJobAttestation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestationOutputReference.property.internalValue"></a>

```java
public GoogleKmsKeyRingImportJobAttestation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobAttestation">GoogleKmsKeyRingImportJobAttestation</a>

---


### GoogleKmsKeyRingImportJobPublicKeyList <a name="GoogleKmsKeyRingImportJobPublicKeyList" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_key_ring_import_job.GoogleKmsKeyRingImportJobPublicKeyList;

new GoogleKmsKeyRingImportJobPublicKeyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.get"></a>

```java
public GoogleKmsKeyRingImportJobPublicKeyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleKmsKeyRingImportJobPublicKeyOutputReference <a name="GoogleKmsKeyRingImportJobPublicKeyOutputReference" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_key_ring_import_job.GoogleKmsKeyRingImportJobPublicKeyOutputReference;

new GoogleKmsKeyRingImportJobPublicKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.property.pem">pem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKey">GoogleKmsKeyRingImportJobPublicKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pem`<sup>Required</sup> <a name="pem" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.property.pem"></a>

```java
public java.lang.String getPem();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKeyOutputReference.property.internalValue"></a>

```java
public GoogleKmsKeyRingImportJobPublicKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobPublicKey">GoogleKmsKeyRingImportJobPublicKey</a>

---


### GoogleKmsKeyRingImportJobTimeoutsOutputReference <a name="GoogleKmsKeyRingImportJobTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_kms_key_ring_import_job.GoogleKmsKeyRingImportJobTimeoutsOutputReference;

new GoogleKmsKeyRingImportJobTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeouts">GoogleKmsKeyRingImportJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleKmsKeyRingImportJob.GoogleKmsKeyRingImportJobTimeouts">GoogleKmsKeyRingImportJobTimeouts</a>

---



