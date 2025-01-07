# `dataGoogleKmsSecretAsymmetric` Submodule <a name="`dataGoogleKmsSecretAsymmetric` Submodule" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleKmsSecretAsymmetric <a name="DataGoogleKmsSecretAsymmetric" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/data-sources/google_kms_secret_asymmetric google_kms_secret_asymmetric}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_kms_secret_asymmetric.DataGoogleKmsSecretAsymmetric;

DataGoogleKmsSecretAsymmetric.Builder.create(Construct scope, java.lang.String id)
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
    .ciphertext(java.lang.String)
    .cryptoKeyVersion(java.lang.String)
//  .crc32(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.ciphertext">ciphertext</a></code> | <code>java.lang.String</code> | The public key encrypted ciphertext in base64 encoding. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.cryptoKeyVersion">cryptoKeyVersion</a></code> | <code>java.lang.String</code> | The fully qualified KMS crypto key version name. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.crc32">crc32</a></code> | <code>java.lang.String</code> | The crc32 checksum of the ciphertext, hexadecimal encoding. If not specified, it will be computed. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/data-sources/google_kms_secret_asymmetric#id DataGoogleKmsSecretAsymmetric#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ciphertext`<sup>Required</sup> <a name="ciphertext" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.ciphertext"></a>

- *Type:* java.lang.String

The public key encrypted ciphertext in base64 encoding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/data-sources/google_kms_secret_asymmetric#ciphertext DataGoogleKmsSecretAsymmetric#ciphertext}

---

##### `cryptoKeyVersion`<sup>Required</sup> <a name="cryptoKeyVersion" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.cryptoKeyVersion"></a>

- *Type:* java.lang.String

The fully qualified KMS crypto key version name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/data-sources/google_kms_secret_asymmetric#crypto_key_version DataGoogleKmsSecretAsymmetric#crypto_key_version}

---

##### `crc32`<sup>Optional</sup> <a name="crc32" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.crc32"></a>

- *Type:* java.lang.String

The crc32 checksum of the ciphertext, hexadecimal encoding. If not specified, it will be computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/data-sources/google_kms_secret_asymmetric#crc32 DataGoogleKmsSecretAsymmetric#crc32}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/data-sources/google_kms_secret_asymmetric#id DataGoogleKmsSecretAsymmetric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.resetCrc32">resetCrc32</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetCrc32` <a name="resetCrc32" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.resetCrc32"></a>

```java
public void resetCrc32()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleKmsSecretAsymmetric resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_kms_secret_asymmetric.DataGoogleKmsSecretAsymmetric;

DataGoogleKmsSecretAsymmetric.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_kms_secret_asymmetric.DataGoogleKmsSecretAsymmetric;

DataGoogleKmsSecretAsymmetric.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_kms_secret_asymmetric.DataGoogleKmsSecretAsymmetric;

DataGoogleKmsSecretAsymmetric.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_kms_secret_asymmetric.DataGoogleKmsSecretAsymmetric;

DataGoogleKmsSecretAsymmetric.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleKmsSecretAsymmetric.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleKmsSecretAsymmetric resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleKmsSecretAsymmetric to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleKmsSecretAsymmetric that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/data-sources/google_kms_secret_asymmetric#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleKmsSecretAsymmetric to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.plaintext">plaintext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.ciphertextInput">ciphertextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.crc32Input">crc32Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.cryptoKeyVersionInput">cryptoKeyVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.ciphertext">ciphertext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.crc32">crc32</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.cryptoKeyVersion">cryptoKeyVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.plaintext"></a>

```java
public java.lang.String getPlaintext();
```

- *Type:* java.lang.String

---

##### `ciphertextInput`<sup>Optional</sup> <a name="ciphertextInput" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.ciphertextInput"></a>

```java
public java.lang.String getCiphertextInput();
```

- *Type:* java.lang.String

---

##### `crc32Input`<sup>Optional</sup> <a name="crc32Input" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.crc32Input"></a>

```java
public java.lang.String getCrc32Input();
```

- *Type:* java.lang.String

---

##### `cryptoKeyVersionInput`<sup>Optional</sup> <a name="cryptoKeyVersionInput" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.cryptoKeyVersionInput"></a>

```java
public java.lang.String getCryptoKeyVersionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ciphertext`<sup>Required</sup> <a name="ciphertext" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.ciphertext"></a>

```java
public java.lang.String getCiphertext();
```

- *Type:* java.lang.String

---

##### `crc32`<sup>Required</sup> <a name="crc32" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.crc32"></a>

```java
public java.lang.String getCrc32();
```

- *Type:* java.lang.String

---

##### `cryptoKeyVersion`<sup>Required</sup> <a name="cryptoKeyVersion" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.cryptoKeyVersion"></a>

```java
public java.lang.String getCryptoKeyVersion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleKmsSecretAsymmetricConfig <a name="DataGoogleKmsSecretAsymmetricConfig" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_kms_secret_asymmetric.DataGoogleKmsSecretAsymmetricConfig;

DataGoogleKmsSecretAsymmetricConfig.builder()
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
    .ciphertext(java.lang.String)
    .cryptoKeyVersion(java.lang.String)
//  .crc32(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.ciphertext">ciphertext</a></code> | <code>java.lang.String</code> | The public key encrypted ciphertext in base64 encoding. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.cryptoKeyVersion">cryptoKeyVersion</a></code> | <code>java.lang.String</code> | The fully qualified KMS crypto key version name. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.crc32">crc32</a></code> | <code>java.lang.String</code> | The crc32 checksum of the ciphertext, hexadecimal encoding. If not specified, it will be computed. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/data-sources/google_kms_secret_asymmetric#id DataGoogleKmsSecretAsymmetric#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ciphertext`<sup>Required</sup> <a name="ciphertext" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.ciphertext"></a>

```java
public java.lang.String getCiphertext();
```

- *Type:* java.lang.String

The public key encrypted ciphertext in base64 encoding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/data-sources/google_kms_secret_asymmetric#ciphertext DataGoogleKmsSecretAsymmetric#ciphertext}

---

##### `cryptoKeyVersion`<sup>Required</sup> <a name="cryptoKeyVersion" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.cryptoKeyVersion"></a>

```java
public java.lang.String getCryptoKeyVersion();
```

- *Type:* java.lang.String

The fully qualified KMS crypto key version name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/data-sources/google_kms_secret_asymmetric#crypto_key_version DataGoogleKmsSecretAsymmetric#crypto_key_version}

---

##### `crc32`<sup>Optional</sup> <a name="crc32" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.crc32"></a>

```java
public java.lang.String getCrc32();
```

- *Type:* java.lang.String

The crc32 checksum of the ciphertext, hexadecimal encoding. If not specified, it will be computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/data-sources/google_kms_secret_asymmetric#crc32 DataGoogleKmsSecretAsymmetric#crc32}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/data-sources/google_kms_secret_asymmetric#id DataGoogleKmsSecretAsymmetric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



