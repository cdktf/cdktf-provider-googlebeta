# `google_compute_disk`

Refer to the Terraform Registory for docs: [`google_compute_disk`](https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk).

# `googleComputeDisk` Submodule <a name="`googleComputeDisk` Submodule" id="@cdktf/provider-google-beta.googleComputeDisk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeDisk <a name="GoogleComputeDisk" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk google_compute_disk}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeDisk(Construct Scope, string Id, GoogleComputeDiskConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig">GoogleComputeDiskConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig">GoogleComputeDiskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putDiskEncryptionKey">PutDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putSourceImageEncryptionKey">PutSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putSourceSnapshotEncryptionKey">PutSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetDiskEncryptionKey">ResetDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetInterface">ResetInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetMultiWriter">ResetMultiWriter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetPhysicalBlockSizeBytes">ResetPhysicalBlockSizeBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetProvisionedIops">ResetProvisionedIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetResourcePolicies">ResetResourcePolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetSize">ResetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetSnapshot">ResetSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetSourceDisk">ResetSourceDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetSourceImageEncryptionKey">ResetSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetSourceSnapshotEncryptionKey">ResetSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDiskEncryptionKey` <a name="PutDiskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putDiskEncryptionKey"></a>

```csharp
private void PutDiskEncryptionKey(GoogleComputeDiskDiskEncryptionKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putDiskEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKey">GoogleComputeDiskDiskEncryptionKey</a>

---

##### `PutSourceImageEncryptionKey` <a name="PutSourceImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putSourceImageEncryptionKey"></a>

```csharp
private void PutSourceImageEncryptionKey(GoogleComputeDiskSourceImageEncryptionKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putSourceImageEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKey">GoogleComputeDiskSourceImageEncryptionKey</a>

---

##### `PutSourceSnapshotEncryptionKey` <a name="PutSourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putSourceSnapshotEncryptionKey"></a>

```csharp
private void PutSourceSnapshotEncryptionKey(GoogleComputeDiskSourceSnapshotEncryptionKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putSourceSnapshotEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKey">GoogleComputeDiskSourceSnapshotEncryptionKey</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeDiskTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeouts">GoogleComputeDiskTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDiskEncryptionKey` <a name="ResetDiskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetDiskEncryptionKey"></a>

```csharp
private void ResetDiskEncryptionKey()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImage` <a name="ResetImage" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetImage"></a>

```csharp
private void ResetImage()
```

##### `ResetInterface` <a name="ResetInterface" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetInterface"></a>

```csharp
private void ResetInterface()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMultiWriter` <a name="ResetMultiWriter" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetMultiWriter"></a>

```csharp
private void ResetMultiWriter()
```

##### `ResetPhysicalBlockSizeBytes` <a name="ResetPhysicalBlockSizeBytes" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetPhysicalBlockSizeBytes"></a>

```csharp
private void ResetPhysicalBlockSizeBytes()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetProvisionedIops` <a name="ResetProvisionedIops" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetProvisionedIops"></a>

```csharp
private void ResetProvisionedIops()
```

##### `ResetResourcePolicies` <a name="ResetResourcePolicies" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetResourcePolicies"></a>

```csharp
private void ResetResourcePolicies()
```

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetSize"></a>

```csharp
private void ResetSize()
```

##### `ResetSnapshot` <a name="ResetSnapshot" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetSnapshot"></a>

```csharp
private void ResetSnapshot()
```

##### `ResetSourceDisk` <a name="ResetSourceDisk" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetSourceDisk"></a>

```csharp
private void ResetSourceDisk()
```

##### `ResetSourceImageEncryptionKey` <a name="ResetSourceImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetSourceImageEncryptionKey"></a>

```csharp
private void ResetSourceImageEncryptionKey()
```

##### `ResetSourceSnapshotEncryptionKey` <a name="ResetSourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetSourceSnapshotEncryptionKey"></a>

```csharp
private void ResetSourceSnapshotEncryptionKey()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetZone"></a>

```csharp
private void ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeDisk.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeDisk.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeDisk.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.diskEncryptionKey">DiskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference">GoogleComputeDiskDiskEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.labelFingerprint">LabelFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.lastAttachTimestamp">LastAttachTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.lastDetachTimestamp">LastDetachTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sourceDiskId">SourceDiskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sourceImageEncryptionKey">SourceImageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference">GoogleComputeDiskSourceImageEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sourceImageId">SourceImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sourceSnapshotEncryptionKey">SourceSnapshotEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference">GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sourceSnapshotId">SourceSnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference">GoogleComputeDiskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.users">Users</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.diskEncryptionKeyInput">DiskEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKey">GoogleComputeDiskDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.interfaceInput">InterfaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.multiWriterInput">MultiWriterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.physicalBlockSizeBytesInput">PhysicalBlockSizeBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.provisionedIopsInput">ProvisionedIopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.resourcePoliciesInput">ResourcePoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.snapshotInput">SnapshotInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sourceDiskInput">SourceDiskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sourceImageEncryptionKeyInput">SourceImageEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKey">GoogleComputeDiskSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sourceSnapshotEncryptionKeyInput">SourceSnapshotEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKey">GoogleComputeDiskSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.interface">Interface</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.multiWriter">MultiWriter</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.physicalBlockSizeBytes">PhysicalBlockSizeBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.provisionedIops">ProvisionedIops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.resourcePolicies">ResourcePolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.snapshot">Snapshot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sourceDisk">SourceDisk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `DiskEncryptionKey`<sup>Required</sup> <a name="DiskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.diskEncryptionKey"></a>

```csharp
public GoogleComputeDiskDiskEncryptionKeyOutputReference DiskEncryptionKey { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference">GoogleComputeDiskDiskEncryptionKeyOutputReference</a>

---

##### `LabelFingerprint`<sup>Required</sup> <a name="LabelFingerprint" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.labelFingerprint"></a>

```csharp
public string LabelFingerprint { get; }
```

- *Type:* string

---

##### `LastAttachTimestamp`<sup>Required</sup> <a name="LastAttachTimestamp" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.lastAttachTimestamp"></a>

```csharp
public string LastAttachTimestamp { get; }
```

- *Type:* string

---

##### `LastDetachTimestamp`<sup>Required</sup> <a name="LastDetachTimestamp" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.lastDetachTimestamp"></a>

```csharp
public string LastDetachTimestamp { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `SourceDiskId`<sup>Required</sup> <a name="SourceDiskId" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sourceDiskId"></a>

```csharp
public string SourceDiskId { get; }
```

- *Type:* string

---

##### `SourceImageEncryptionKey`<sup>Required</sup> <a name="SourceImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sourceImageEncryptionKey"></a>

```csharp
public GoogleComputeDiskSourceImageEncryptionKeyOutputReference SourceImageEncryptionKey { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference">GoogleComputeDiskSourceImageEncryptionKeyOutputReference</a>

---

##### `SourceImageId`<sup>Required</sup> <a name="SourceImageId" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sourceImageId"></a>

```csharp
public string SourceImageId { get; }
```

- *Type:* string

---

##### `SourceSnapshotEncryptionKey`<sup>Required</sup> <a name="SourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sourceSnapshotEncryptionKey"></a>

```csharp
public GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference SourceSnapshotEncryptionKey { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference">GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference</a>

---

##### `SourceSnapshotId`<sup>Required</sup> <a name="SourceSnapshotId" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sourceSnapshotId"></a>

```csharp
public string SourceSnapshotId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.timeouts"></a>

```csharp
public GoogleComputeDiskTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference">GoogleComputeDiskTimeoutsOutputReference</a>

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.users"></a>

```csharp
public string[] Users { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DiskEncryptionKeyInput`<sup>Optional</sup> <a name="DiskEncryptionKeyInput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.diskEncryptionKeyInput"></a>

```csharp
public GoogleComputeDiskDiskEncryptionKey DiskEncryptionKeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKey">GoogleComputeDiskDiskEncryptionKey</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `InterfaceInput`<sup>Optional</sup> <a name="InterfaceInput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.interfaceInput"></a>

```csharp
public string InterfaceInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MultiWriterInput`<sup>Optional</sup> <a name="MultiWriterInput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.multiWriterInput"></a>

```csharp
public object MultiWriterInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PhysicalBlockSizeBytesInput`<sup>Optional</sup> <a name="PhysicalBlockSizeBytesInput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.physicalBlockSizeBytesInput"></a>

```csharp
public double PhysicalBlockSizeBytesInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ProvisionedIopsInput`<sup>Optional</sup> <a name="ProvisionedIopsInput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.provisionedIopsInput"></a>

```csharp
public double ProvisionedIopsInput { get; }
```

- *Type:* double

---

##### `ResourcePoliciesInput`<sup>Optional</sup> <a name="ResourcePoliciesInput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.resourcePoliciesInput"></a>

```csharp
public string[] ResourcePoliciesInput { get; }
```

- *Type:* string[]

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `SnapshotInput`<sup>Optional</sup> <a name="SnapshotInput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.snapshotInput"></a>

```csharp
public string SnapshotInput { get; }
```

- *Type:* string

---

##### `SourceDiskInput`<sup>Optional</sup> <a name="SourceDiskInput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sourceDiskInput"></a>

```csharp
public string SourceDiskInput { get; }
```

- *Type:* string

---

##### `SourceImageEncryptionKeyInput`<sup>Optional</sup> <a name="SourceImageEncryptionKeyInput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sourceImageEncryptionKeyInput"></a>

```csharp
public GoogleComputeDiskSourceImageEncryptionKey SourceImageEncryptionKeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKey">GoogleComputeDiskSourceImageEncryptionKey</a>

---

##### `SourceSnapshotEncryptionKeyInput`<sup>Optional</sup> <a name="SourceSnapshotEncryptionKeyInput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sourceSnapshotEncryptionKeyInput"></a>

```csharp
public GoogleComputeDiskSourceSnapshotEncryptionKey SourceSnapshotEncryptionKeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKey">GoogleComputeDiskSourceSnapshotEncryptionKey</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.interface"></a>

```csharp
public string Interface { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MultiWriter`<sup>Required</sup> <a name="MultiWriter" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.multiWriter"></a>

```csharp
public object MultiWriter { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PhysicalBlockSizeBytes`<sup>Required</sup> <a name="PhysicalBlockSizeBytes" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.physicalBlockSizeBytes"></a>

```csharp
public double PhysicalBlockSizeBytes { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ProvisionedIops`<sup>Required</sup> <a name="ProvisionedIops" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.provisionedIops"></a>

```csharp
public double ProvisionedIops { get; }
```

- *Type:* double

---

##### `ResourcePolicies`<sup>Required</sup> <a name="ResourcePolicies" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.resourcePolicies"></a>

```csharp
public string[] ResourcePolicies { get; }
```

- *Type:* string[]

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `Snapshot`<sup>Required</sup> <a name="Snapshot" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.snapshot"></a>

```csharp
public string Snapshot { get; }
```

- *Type:* string

---

##### `SourceDisk`<sup>Required</sup> <a name="SourceDisk" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sourceDisk"></a>

```csharp
public string SourceDisk { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeDiskConfig <a name="GoogleComputeDiskConfig" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeDiskConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Description = null,
    GoogleComputeDiskDiskEncryptionKey DiskEncryptionKey = null,
    string Id = null,
    string Image = null,
    string Interface = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    object MultiWriter = null,
    double PhysicalBlockSizeBytes = null,
    string Project = null,
    double ProvisionedIops = null,
    string[] ResourcePolicies = null,
    double Size = null,
    string Snapshot = null,
    string SourceDisk = null,
    GoogleComputeDiskSourceImageEncryptionKey SourceImageEncryptionKey = null,
    GoogleComputeDiskSourceSnapshotEncryptionKey SourceSnapshotEncryptionKey = null,
    GoogleComputeDiskTimeouts Timeouts = null,
    string Type = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.diskEncryptionKey">DiskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKey">GoogleComputeDiskDiskEncryptionKey</a></code> | disk_encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#id GoogleComputeDisk#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.image">Image</a></code> | <code>string</code> | The image from which to initialize this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.interface">Interface</a></code> | <code>string</code> | Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels to apply to this disk.  A list of key->value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.multiWriter">MultiWriter</a></code> | <code>object</code> | Indicates whether or not the disk can be read/write attached to more than one instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.physicalBlockSizeBytes">PhysicalBlockSizeBytes</a></code> | <code>double</code> | Physical block size of the persistent disk, in bytes. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#project GoogleComputeDisk#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.provisionedIops">ProvisionedIops</a></code> | <code>double</code> | Indicates how many IOPS must be provisioned for the disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.resourcePolicies">ResourcePolicies</a></code> | <code>string[]</code> | Resource policies applied to this disk for automatic snapshot creations. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.size">Size</a></code> | <code>double</code> | Size of the persistent disk, specified in GB. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.snapshot">Snapshot</a></code> | <code>string</code> | The source snapshot used to create this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.sourceDisk">SourceDisk</a></code> | <code>string</code> | The source disk used to create this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.sourceImageEncryptionKey">SourceImageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKey">GoogleComputeDiskSourceImageEncryptionKey</a></code> | source_image_encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.sourceSnapshotEncryptionKey">SourceSnapshotEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKey">GoogleComputeDiskSourceSnapshotEncryptionKey</a></code> | source_snapshot_encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeouts">GoogleComputeDiskTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.type">Type</a></code> | <code>string</code> | URL of the disk type resource describing which disk type to use to create the disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.zone">Zone</a></code> | <code>string</code> | A reference to the zone where the disk resides. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#name GoogleComputeDisk#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#description GoogleComputeDisk#description}

---

##### `DiskEncryptionKey`<sup>Optional</sup> <a name="DiskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.diskEncryptionKey"></a>

```csharp
public GoogleComputeDiskDiskEncryptionKey DiskEncryptionKey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKey">GoogleComputeDiskDiskEncryptionKey</a>

disk_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#disk_encryption_key GoogleComputeDisk#disk_encryption_key}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#id GoogleComputeDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

The image from which to initialize this disk.

This can be
one of: the image's 'self_link', 'projects/{project}/global/images/{image}',
'projects/{project}/global/images/family/{family}', 'global/images/{image}',
'global/images/family/{family}', 'family/{family}', '{project}/{family}',
'{project}/{image}', '{family}', or '{image}'. If referred by family, the
images names must include the family name. If they don't, use the
[google_compute_image data source](/docs/providers/google/d/compute_image.html).
For instance, the image 'centos-6-v20180104' includes its family name 'centos-6'.
These images can be referred by family name here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#image GoogleComputeDisk#image}

---

##### `Interface`<sup>Optional</sup> <a name="Interface" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.interface"></a>

```csharp
public string Interface { get; set; }
```

- *Type:* string

Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME.

The default is SCSI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#interface GoogleComputeDisk#interface}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels to apply to this disk.  A list of key->value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#labels GoogleComputeDisk#labels}

---

##### `MultiWriter`<sup>Optional</sup> <a name="MultiWriter" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.multiWriter"></a>

```csharp
public object MultiWriter { get; set; }
```

- *Type:* object

Indicates whether or not the disk can be read/write attached to more than one instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#multi_writer GoogleComputeDisk#multi_writer}

---

##### `PhysicalBlockSizeBytes`<sup>Optional</sup> <a name="PhysicalBlockSizeBytes" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.physicalBlockSizeBytes"></a>

```csharp
public double PhysicalBlockSizeBytes { get; set; }
```

- *Type:* double

Physical block size of the persistent disk, in bytes.

If not present
in a request, a default value is used. Currently supported sizes
are 4096 and 16384, other sizes may be added in the future.
If an unsupported value is requested, the error message will list
the supported values for the caller's project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#physical_block_size_bytes GoogleComputeDisk#physical_block_size_bytes}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#project GoogleComputeDisk#project}.

---

##### `ProvisionedIops`<sup>Optional</sup> <a name="ProvisionedIops" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.provisionedIops"></a>

```csharp
public double ProvisionedIops { get; set; }
```

- *Type:* double

Indicates how many IOPS must be provisioned for the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#provisioned_iops GoogleComputeDisk#provisioned_iops}

---

##### `ResourcePolicies`<sup>Optional</sup> <a name="ResourcePolicies" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.resourcePolicies"></a>

```csharp
public string[] ResourcePolicies { get; set; }
```

- *Type:* string[]

Resource policies applied to this disk for automatic snapshot creations.

~>**NOTE** This value does not support updating the
resource policy, as resource policies can not be updated more than
one at a time. Use
['google_compute_disk_resource_policy_attachment'](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_disk_resource_policy_attachment)
to allow for updating the resource policy attached to the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#resource_policies GoogleComputeDisk#resource_policies}

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

Size of the persistent disk, specified in GB.

You can specify this
field when creating a persistent disk using the 'image' or
'snapshot' parameter, or specify it alone to create an empty
persistent disk.

If you specify this field along with 'image' or 'snapshot',
the value must not be less than the size of the image
or the size of the snapshot.

~>**NOTE** If you change the size, Terraform updates the disk size
if upsizing is detected but recreates the disk if downsizing is requested.
You can add 'lifecycle.prevent_destroy' in the config to prevent destroying
and recreating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#size GoogleComputeDisk#size}

---

##### `Snapshot`<sup>Optional</sup> <a name="Snapshot" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.snapshot"></a>

```csharp
public string Snapshot { get; set; }
```

- *Type:* string

The source snapshot used to create this disk.

You can provide this as
a partial or full URL to the resource. If the snapshot is in another
project than this disk, you must supply a full URL. For example, the
following are valid values:

'https://www.googleapis.com/compute/v1/projects/project/global/snapshots/snapshot'
'projects/project/global/snapshots/snapshot'
'global/snapshots/snapshot'
'snapshot'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#snapshot GoogleComputeDisk#snapshot}

---

##### `SourceDisk`<sup>Optional</sup> <a name="SourceDisk" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.sourceDisk"></a>

```csharp
public string SourceDisk { get; set; }
```

- *Type:* string

The source disk used to create this disk.

You can provide this as a partial or full URL to the resource.
For example, the following are valid values:

https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/disks/{disk}
https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/disks/{disk}
projects/{project}/zones/{zone}/disks/{disk}
projects/{project}/regions/{region}/disks/{disk}
zones/{zone}/disks/{disk}
regions/{region}/disks/{disk}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#source_disk GoogleComputeDisk#source_disk}

---

##### `SourceImageEncryptionKey`<sup>Optional</sup> <a name="SourceImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.sourceImageEncryptionKey"></a>

```csharp
public GoogleComputeDiskSourceImageEncryptionKey SourceImageEncryptionKey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKey">GoogleComputeDiskSourceImageEncryptionKey</a>

source_image_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#source_image_encryption_key GoogleComputeDisk#source_image_encryption_key}

---

##### `SourceSnapshotEncryptionKey`<sup>Optional</sup> <a name="SourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.sourceSnapshotEncryptionKey"></a>

```csharp
public GoogleComputeDiskSourceSnapshotEncryptionKey SourceSnapshotEncryptionKey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKey">GoogleComputeDiskSourceSnapshotEncryptionKey</a>

source_snapshot_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#source_snapshot_encryption_key GoogleComputeDisk#source_snapshot_encryption_key}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.timeouts"></a>

```csharp
public GoogleComputeDiskTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeouts">GoogleComputeDiskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#timeouts GoogleComputeDisk#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

URL of the disk type resource describing which disk type to use to create the disk.

Provide this when creating the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#type GoogleComputeDisk#type}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

A reference to the zone where the disk resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#zone GoogleComputeDisk#zone}

---

### GoogleComputeDiskDiskEncryptionKey <a name="GoogleComputeDiskDiskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeDiskDiskEncryptionKey {
    string KmsKeySelfLink = null,
    string KmsKeyServiceAccount = null,
    string RawKey = null,
    string RsaEncryptedKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKey.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>string</code> | The self link of the encryption key used to encrypt the disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKey.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>string</code> | The service account used for the encryption request for the given KMS key. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKey.property.rawKey">RawKey</a></code> | <code>string</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKey.property.rsaEncryptedKey">RsaEncryptedKey</a></code> | <code>string</code> | Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit  customer-supplied encryption key to either encrypt or decrypt  this resource. |

---

##### `KmsKeySelfLink`<sup>Optional</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKey.property.kmsKeySelfLink"></a>

```csharp
public string KmsKeySelfLink { get; set; }
```

- *Type:* string

The self link of the encryption key used to encrypt the disk.

Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#kms_key_self_link GoogleComputeDisk#kms_key_self_link}

---

##### `KmsKeyServiceAccount`<sup>Optional</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKey.property.kmsKeyServiceAccount"></a>

```csharp
public string KmsKeyServiceAccount { get; set; }
```

- *Type:* string

The service account used for the encryption request for the given KMS key.

If absent, the Compute Engine Service Agent service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#kms_key_service_account GoogleComputeDisk#kms_key_service_account}

---

##### `RawKey`<sup>Optional</sup> <a name="RawKey" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKey.property.rawKey"></a>

```csharp
public string RawKey { get; set; }
```

- *Type:* string

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#raw_key GoogleComputeDisk#raw_key}

---

##### `RsaEncryptedKey`<sup>Optional</sup> <a name="RsaEncryptedKey" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKey.property.rsaEncryptedKey"></a>

```csharp
public string RsaEncryptedKey { get; set; }
```

- *Type:* string

Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit  customer-supplied encryption key to either encrypt or decrypt  this resource.

You can provide either the rawKey or the rsaEncryptedKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#rsa_encrypted_key GoogleComputeDisk#rsa_encrypted_key}

---

### GoogleComputeDiskSourceImageEncryptionKey <a name="GoogleComputeDiskSourceImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeDiskSourceImageEncryptionKey {
    string KmsKeySelfLink = null,
    string KmsKeyServiceAccount = null,
    string RawKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKey.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>string</code> | The self link of the encryption key used to encrypt the disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKey.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>string</code> | The service account used for the encryption request for the given KMS key. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKey.property.rawKey">RawKey</a></code> | <code>string</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |

---

##### `KmsKeySelfLink`<sup>Optional</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKey.property.kmsKeySelfLink"></a>

```csharp
public string KmsKeySelfLink { get; set; }
```

- *Type:* string

The self link of the encryption key used to encrypt the disk.

Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#kms_key_self_link GoogleComputeDisk#kms_key_self_link}

---

##### `KmsKeyServiceAccount`<sup>Optional</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKey.property.kmsKeyServiceAccount"></a>

```csharp
public string KmsKeyServiceAccount { get; set; }
```

- *Type:* string

The service account used for the encryption request for the given KMS key.

If absent, the Compute Engine Service Agent service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#kms_key_service_account GoogleComputeDisk#kms_key_service_account}

---

##### `RawKey`<sup>Optional</sup> <a name="RawKey" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKey.property.rawKey"></a>

```csharp
public string RawKey { get; set; }
```

- *Type:* string

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#raw_key GoogleComputeDisk#raw_key}

---

### GoogleComputeDiskSourceSnapshotEncryptionKey <a name="GoogleComputeDiskSourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeDiskSourceSnapshotEncryptionKey {
    string KmsKeySelfLink = null,
    string KmsKeyServiceAccount = null,
    string RawKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKey.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>string</code> | The self link of the encryption key used to encrypt the disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKey.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>string</code> | The service account used for the encryption request for the given KMS key. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKey.property.rawKey">RawKey</a></code> | <code>string</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |

---

##### `KmsKeySelfLink`<sup>Optional</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKey.property.kmsKeySelfLink"></a>

```csharp
public string KmsKeySelfLink { get; set; }
```

- *Type:* string

The self link of the encryption key used to encrypt the disk.

Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#kms_key_self_link GoogleComputeDisk#kms_key_self_link}

---

##### `KmsKeyServiceAccount`<sup>Optional</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKey.property.kmsKeyServiceAccount"></a>

```csharp
public string KmsKeyServiceAccount { get; set; }
```

- *Type:* string

The service account used for the encryption request for the given KMS key.

If absent, the Compute Engine Service Agent service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#kms_key_service_account GoogleComputeDisk#kms_key_service_account}

---

##### `RawKey`<sup>Optional</sup> <a name="RawKey" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKey.property.rawKey"></a>

```csharp
public string RawKey { get; set; }
```

- *Type:* string

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#raw_key GoogleComputeDisk#raw_key}

---

### GoogleComputeDiskTimeouts <a name="GoogleComputeDiskTimeouts" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeDiskTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#create GoogleComputeDisk#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#delete GoogleComputeDisk#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#update GoogleComputeDisk#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#create GoogleComputeDisk#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#delete GoogleComputeDisk#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.62.1/docs/resources/google_compute_disk#update GoogleComputeDisk#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeDiskDiskEncryptionKeyOutputReference <a name="GoogleComputeDiskDiskEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeDiskDiskEncryptionKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.resetKmsKeySelfLink">ResetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.resetKmsKeyServiceAccount">ResetKmsKeyServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.resetRawKey">ResetRawKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.resetRsaEncryptedKey">ResetRsaEncryptedKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeySelfLink` <a name="ResetKmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```csharp
private void ResetKmsKeySelfLink()
```

##### `ResetKmsKeyServiceAccount` <a name="ResetKmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```csharp
private void ResetKmsKeyServiceAccount()
```

##### `ResetRawKey` <a name="ResetRawKey" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.resetRawKey"></a>

```csharp
private void ResetRawKey()
```

##### `ResetRsaEncryptedKey` <a name="ResetRsaEncryptedKey" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.resetRsaEncryptedKey"></a>

```csharp
private void ResetRsaEncryptedKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.sha256">Sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">KmsKeySelfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">KmsKeyServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.rawKeyInput">RawKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.rsaEncryptedKeyInput">RsaEncryptedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.rawKey">RawKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.rsaEncryptedKey">RsaEncryptedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKey">GoogleComputeDiskDiskEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Sha256`<sup>Required</sup> <a name="Sha256" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.sha256"></a>

```csharp
public string Sha256 { get; }
```

- *Type:* string

---

##### `KmsKeySelfLinkInput`<sup>Optional</sup> <a name="KmsKeySelfLinkInput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```csharp
public string KmsKeySelfLinkInput { get; }
```

- *Type:* string

---

##### `KmsKeyServiceAccountInput`<sup>Optional</sup> <a name="KmsKeyServiceAccountInput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```csharp
public string KmsKeyServiceAccountInput { get; }
```

- *Type:* string

---

##### `RawKeyInput`<sup>Optional</sup> <a name="RawKeyInput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.rawKeyInput"></a>

```csharp
public string RawKeyInput { get; }
```

- *Type:* string

---

##### `RsaEncryptedKeyInput`<sup>Optional</sup> <a name="RsaEncryptedKeyInput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.rsaEncryptedKeyInput"></a>

```csharp
public string RsaEncryptedKeyInput { get; }
```

- *Type:* string

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```csharp
public string KmsKeySelfLink { get; }
```

- *Type:* string

---

##### `KmsKeyServiceAccount`<sup>Required</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```csharp
public string KmsKeyServiceAccount { get; }
```

- *Type:* string

---

##### `RawKey`<sup>Required</sup> <a name="RawKey" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.rawKey"></a>

```csharp
public string RawKey { get; }
```

- *Type:* string

---

##### `RsaEncryptedKey`<sup>Required</sup> <a name="RsaEncryptedKey" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```csharp
public string RsaEncryptedKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeDiskDiskEncryptionKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKey">GoogleComputeDiskDiskEncryptionKey</a>

---


### GoogleComputeDiskSourceImageEncryptionKeyOutputReference <a name="GoogleComputeDiskSourceImageEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeDiskSourceImageEncryptionKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.resetKmsKeySelfLink">ResetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount">ResetKmsKeyServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.resetRawKey">ResetRawKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeySelfLink` <a name="ResetKmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```csharp
private void ResetKmsKeySelfLink()
```

##### `ResetKmsKeyServiceAccount` <a name="ResetKmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```csharp
private void ResetKmsKeyServiceAccount()
```

##### `ResetRawKey` <a name="ResetRawKey" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.resetRawKey"></a>

```csharp
private void ResetRawKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.sha256">Sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">KmsKeySelfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">KmsKeyServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.rawKeyInput">RawKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.rawKey">RawKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKey">GoogleComputeDiskSourceImageEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Sha256`<sup>Required</sup> <a name="Sha256" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.sha256"></a>

```csharp
public string Sha256 { get; }
```

- *Type:* string

---

##### `KmsKeySelfLinkInput`<sup>Optional</sup> <a name="KmsKeySelfLinkInput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```csharp
public string KmsKeySelfLinkInput { get; }
```

- *Type:* string

---

##### `KmsKeyServiceAccountInput`<sup>Optional</sup> <a name="KmsKeyServiceAccountInput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```csharp
public string KmsKeyServiceAccountInput { get; }
```

- *Type:* string

---

##### `RawKeyInput`<sup>Optional</sup> <a name="RawKeyInput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.rawKeyInput"></a>

```csharp
public string RawKeyInput { get; }
```

- *Type:* string

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```csharp
public string KmsKeySelfLink { get; }
```

- *Type:* string

---

##### `KmsKeyServiceAccount`<sup>Required</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```csharp
public string KmsKeyServiceAccount { get; }
```

- *Type:* string

---

##### `RawKey`<sup>Required</sup> <a name="RawKey" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.rawKey"></a>

```csharp
public string RawKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeDiskSourceImageEncryptionKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKey">GoogleComputeDiskSourceImageEncryptionKey</a>

---


### GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference <a name="GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeySelfLink">ResetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount">ResetKmsKeyServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.resetRawKey">ResetRawKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeySelfLink` <a name="ResetKmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```csharp
private void ResetKmsKeySelfLink()
```

##### `ResetKmsKeyServiceAccount` <a name="ResetKmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```csharp
private void ResetKmsKeyServiceAccount()
```

##### `ResetRawKey` <a name="ResetRawKey" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.resetRawKey"></a>

```csharp
private void ResetRawKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.sha256">Sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">KmsKeySelfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">KmsKeyServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.rawKeyInput">RawKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.rawKey">RawKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKey">GoogleComputeDiskSourceSnapshotEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Sha256`<sup>Required</sup> <a name="Sha256" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.sha256"></a>

```csharp
public string Sha256 { get; }
```

- *Type:* string

---

##### `KmsKeySelfLinkInput`<sup>Optional</sup> <a name="KmsKeySelfLinkInput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```csharp
public string KmsKeySelfLinkInput { get; }
```

- *Type:* string

---

##### `KmsKeyServiceAccountInput`<sup>Optional</sup> <a name="KmsKeyServiceAccountInput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```csharp
public string KmsKeyServiceAccountInput { get; }
```

- *Type:* string

---

##### `RawKeyInput`<sup>Optional</sup> <a name="RawKeyInput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.rawKeyInput"></a>

```csharp
public string RawKeyInput { get; }
```

- *Type:* string

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```csharp
public string KmsKeySelfLink { get; }
```

- *Type:* string

---

##### `KmsKeyServiceAccount`<sup>Required</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```csharp
public string KmsKeyServiceAccount { get; }
```

- *Type:* string

---

##### `RawKey`<sup>Required</sup> <a name="RawKey" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.rawKey"></a>

```csharp
public string RawKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeDiskSourceSnapshotEncryptionKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKey">GoogleComputeDiskSourceSnapshotEncryptionKey</a>

---


### GoogleComputeDiskTimeoutsOutputReference <a name="GoogleComputeDiskTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeDiskTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



