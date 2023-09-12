# `google_alloydb_cluster`

Refer to the Terraform Registory for docs: [`google_alloydb_cluster`](https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster).

# `googleAlloydbCluster` Submodule <a name="`googleAlloydbCluster` Submodule" id="@cdktf/provider-google-beta.googleAlloydbCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAlloydbCluster <a name="GoogleAlloydbCluster" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster google_alloydb_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbCluster(Construct Scope, string Id, GoogleAlloydbClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig">GoogleAlloydbClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig">GoogleAlloydbClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putAutomatedBackupPolicy">PutAutomatedBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putContinuousBackupConfig">PutContinuousBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putEncryptionConfig">PutEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putInitialUser">PutInitialUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putRestoreBackupSource">PutRestoreBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putRestoreContinuousBackupSource">PutRestoreContinuousBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetAutomatedBackupPolicy">ResetAutomatedBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetContinuousBackupConfig">ResetContinuousBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetEncryptionConfig">ResetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetInitialUser">ResetInitialUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetRestoreBackupSource">ResetRestoreBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetRestoreContinuousBackupSource">ResetRestoreContinuousBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAutomatedBackupPolicy` <a name="PutAutomatedBackupPolicy" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putAutomatedBackupPolicy"></a>

```csharp
private void PutAutomatedBackupPolicy(GoogleAlloydbClusterAutomatedBackupPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putAutomatedBackupPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy">GoogleAlloydbClusterAutomatedBackupPolicy</a>

---

##### `PutContinuousBackupConfig` <a name="PutContinuousBackupConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putContinuousBackupConfig"></a>

```csharp
private void PutContinuousBackupConfig(GoogleAlloydbClusterContinuousBackupConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putContinuousBackupConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig">GoogleAlloydbClusterContinuousBackupConfig</a>

---

##### `PutEncryptionConfig` <a name="PutEncryptionConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putEncryptionConfig"></a>

```csharp
private void PutEncryptionConfig(GoogleAlloydbClusterEncryptionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfig">GoogleAlloydbClusterEncryptionConfig</a>

---

##### `PutInitialUser` <a name="PutInitialUser" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putInitialUser"></a>

```csharp
private void PutInitialUser(GoogleAlloydbClusterInitialUser Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putInitialUser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser">GoogleAlloydbClusterInitialUser</a>

---

##### `PutRestoreBackupSource` <a name="PutRestoreBackupSource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putRestoreBackupSource"></a>

```csharp
private void PutRestoreBackupSource(GoogleAlloydbClusterRestoreBackupSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putRestoreBackupSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSource">GoogleAlloydbClusterRestoreBackupSource</a>

---

##### `PutRestoreContinuousBackupSource` <a name="PutRestoreContinuousBackupSource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putRestoreContinuousBackupSource"></a>

```csharp
private void PutRestoreContinuousBackupSource(GoogleAlloydbClusterRestoreContinuousBackupSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putRestoreContinuousBackupSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource">GoogleAlloydbClusterRestoreContinuousBackupSource</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleAlloydbClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts">GoogleAlloydbClusterTimeouts</a>

---

##### `ResetAutomatedBackupPolicy` <a name="ResetAutomatedBackupPolicy" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetAutomatedBackupPolicy"></a>

```csharp
private void ResetAutomatedBackupPolicy()
```

##### `ResetContinuousBackupConfig` <a name="ResetContinuousBackupConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetContinuousBackupConfig"></a>

```csharp
private void ResetContinuousBackupConfig()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEncryptionConfig` <a name="ResetEncryptionConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetEncryptionConfig"></a>

```csharp
private void ResetEncryptionConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInitialUser` <a name="ResetInitialUser" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetInitialUser"></a>

```csharp
private void ResetInitialUser()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRestoreBackupSource` <a name="ResetRestoreBackupSource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetRestoreBackupSource"></a>

```csharp
private void ResetRestoreBackupSource()
```

##### `ResetRestoreContinuousBackupSource` <a name="ResetRestoreContinuousBackupSource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetRestoreContinuousBackupSource"></a>

```csharp
private void ResetRestoreContinuousBackupSource()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAlloydbCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAlloydbCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAlloydbCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.automatedBackupPolicy">AutomatedBackupPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference">GoogleAlloydbClusterAutomatedBackupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.backupSource">BackupSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList">GoogleAlloydbClusterBackupSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.continuousBackupConfig">ContinuousBackupConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference">GoogleAlloydbClusterContinuousBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.continuousBackupInfo">ContinuousBackupInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList">GoogleAlloydbClusterContinuousBackupInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.databaseVersion">DatabaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference">GoogleAlloydbClusterEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.encryptionInfo">EncryptionInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList">GoogleAlloydbClusterEncryptionInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.initialUser">InitialUser</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference">GoogleAlloydbClusterInitialUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.migrationSource">MigrationSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList">GoogleAlloydbClusterMigrationSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.restoreBackupSource">RestoreBackupSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference">GoogleAlloydbClusterRestoreBackupSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.restoreContinuousBackupSource">RestoreContinuousBackupSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference">GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference">GoogleAlloydbClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.automatedBackupPolicyInput">AutomatedBackupPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy">GoogleAlloydbClusterAutomatedBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.continuousBackupConfigInput">ContinuousBackupConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig">GoogleAlloydbClusterContinuousBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.encryptionConfigInput">EncryptionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfig">GoogleAlloydbClusterEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.initialUserInput">InitialUserInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser">GoogleAlloydbClusterInitialUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.restoreBackupSourceInput">RestoreBackupSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSource">GoogleAlloydbClusterRestoreBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.restoreContinuousBackupSourceInput">RestoreContinuousBackupSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource">GoogleAlloydbClusterRestoreContinuousBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AutomatedBackupPolicy`<sup>Required</sup> <a name="AutomatedBackupPolicy" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.automatedBackupPolicy"></a>

```csharp
public GoogleAlloydbClusterAutomatedBackupPolicyOutputReference AutomatedBackupPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference">GoogleAlloydbClusterAutomatedBackupPolicyOutputReference</a>

---

##### `BackupSource`<sup>Required</sup> <a name="BackupSource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.backupSource"></a>

```csharp
public GoogleAlloydbClusterBackupSourceList BackupSource { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList">GoogleAlloydbClusterBackupSourceList</a>

---

##### `ContinuousBackupConfig`<sup>Required</sup> <a name="ContinuousBackupConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.continuousBackupConfig"></a>

```csharp
public GoogleAlloydbClusterContinuousBackupConfigOutputReference ContinuousBackupConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference">GoogleAlloydbClusterContinuousBackupConfigOutputReference</a>

---

##### `ContinuousBackupInfo`<sup>Required</sup> <a name="ContinuousBackupInfo" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.continuousBackupInfo"></a>

```csharp
public GoogleAlloydbClusterContinuousBackupInfoList ContinuousBackupInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList">GoogleAlloydbClusterContinuousBackupInfoList</a>

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.databaseVersion"></a>

```csharp
public string DatabaseVersion { get; }
```

- *Type:* string

---

##### `EncryptionConfig`<sup>Required</sup> <a name="EncryptionConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.encryptionConfig"></a>

```csharp
public GoogleAlloydbClusterEncryptionConfigOutputReference EncryptionConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference">GoogleAlloydbClusterEncryptionConfigOutputReference</a>

---

##### `EncryptionInfo`<sup>Required</sup> <a name="EncryptionInfo" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.encryptionInfo"></a>

```csharp
public GoogleAlloydbClusterEncryptionInfoList EncryptionInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList">GoogleAlloydbClusterEncryptionInfoList</a>

---

##### `InitialUser`<sup>Required</sup> <a name="InitialUser" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.initialUser"></a>

```csharp
public GoogleAlloydbClusterInitialUserOutputReference InitialUser { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference">GoogleAlloydbClusterInitialUserOutputReference</a>

---

##### `MigrationSource`<sup>Required</sup> <a name="MigrationSource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.migrationSource"></a>

```csharp
public GoogleAlloydbClusterMigrationSourceList MigrationSource { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList">GoogleAlloydbClusterMigrationSourceList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RestoreBackupSource`<sup>Required</sup> <a name="RestoreBackupSource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.restoreBackupSource"></a>

```csharp
public GoogleAlloydbClusterRestoreBackupSourceOutputReference RestoreBackupSource { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference">GoogleAlloydbClusterRestoreBackupSourceOutputReference</a>

---

##### `RestoreContinuousBackupSource`<sup>Required</sup> <a name="RestoreContinuousBackupSource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.restoreContinuousBackupSource"></a>

```csharp
public GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference RestoreContinuousBackupSource { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference">GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.timeouts"></a>

```csharp
public GoogleAlloydbClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference">GoogleAlloydbClusterTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `AutomatedBackupPolicyInput`<sup>Optional</sup> <a name="AutomatedBackupPolicyInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.automatedBackupPolicyInput"></a>

```csharp
public GoogleAlloydbClusterAutomatedBackupPolicy AutomatedBackupPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy">GoogleAlloydbClusterAutomatedBackupPolicy</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `ContinuousBackupConfigInput`<sup>Optional</sup> <a name="ContinuousBackupConfigInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.continuousBackupConfigInput"></a>

```csharp
public GoogleAlloydbClusterContinuousBackupConfig ContinuousBackupConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig">GoogleAlloydbClusterContinuousBackupConfig</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EncryptionConfigInput`<sup>Optional</sup> <a name="EncryptionConfigInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.encryptionConfigInput"></a>

```csharp
public GoogleAlloydbClusterEncryptionConfig EncryptionConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfig">GoogleAlloydbClusterEncryptionConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InitialUserInput`<sup>Optional</sup> <a name="InitialUserInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.initialUserInput"></a>

```csharp
public GoogleAlloydbClusterInitialUser InitialUserInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser">GoogleAlloydbClusterInitialUser</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RestoreBackupSourceInput`<sup>Optional</sup> <a name="RestoreBackupSourceInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.restoreBackupSourceInput"></a>

```csharp
public GoogleAlloydbClusterRestoreBackupSource RestoreBackupSourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSource">GoogleAlloydbClusterRestoreBackupSource</a>

---

##### `RestoreContinuousBackupSourceInput`<sup>Optional</sup> <a name="RestoreContinuousBackupSourceInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.restoreContinuousBackupSourceInput"></a>

```csharp
public GoogleAlloydbClusterRestoreContinuousBackupSource RestoreContinuousBackupSourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource">GoogleAlloydbClusterRestoreContinuousBackupSource</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAlloydbClusterAutomatedBackupPolicy <a name="GoogleAlloydbClusterAutomatedBackupPolicy" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterAutomatedBackupPolicy {
    string BackupWindow = null,
    object Enabled = null,
    GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig EncryptionConfig = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Location = null,
    GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention QuantityBasedRetention = null,
    GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention TimeBasedRetention = null,
    GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule WeeklySchedule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.backupWindow">BackupWindow</a></code> | <code>string</code> | The length of the time window during which a backup can be taken. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.enabled">Enabled</a></code> | <code>object</code> | Whether automated backups are enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig">GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels to apply to backups created using this configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.location">Location</a></code> | <code>string</code> | The location where the backup will be stored. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.quantityBasedRetention">QuantityBasedRetention</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention</a></code> | quantity_based_retention block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.timeBasedRetention">TimeBasedRetention</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention</a></code> | time_based_retention block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.weeklySchedule">WeeklySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule">GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule</a></code> | weekly_schedule block. |

---

##### `BackupWindow`<sup>Optional</sup> <a name="BackupWindow" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.backupWindow"></a>

```csharp
public string BackupWindow { get; set; }
```

- *Type:* string

The length of the time window during which a backup can be taken.

If a backup does not succeed within this time window, it will be canceled and considered failed.

The backup window must be at least 5 minutes long. There is no upper bound on the window. If not set, it will default to 1 hour.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#backup_window GoogleAlloydbCluster#backup_window}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether automated backups are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#enabled GoogleAlloydbCluster#enabled}

---

##### `EncryptionConfig`<sup>Optional</sup> <a name="EncryptionConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.encryptionConfig"></a>

```csharp
public GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig EncryptionConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig">GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#encryption_config GoogleAlloydbCluster#encryption_config}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels to apply to backups created using this configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#labels GoogleAlloydbCluster#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location where the backup will be stored.

Currently, the only supported option is to store the backup in the same region as the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#location GoogleAlloydbCluster#location}

---

##### `QuantityBasedRetention`<sup>Optional</sup> <a name="QuantityBasedRetention" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.quantityBasedRetention"></a>

```csharp
public GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention QuantityBasedRetention { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention</a>

quantity_based_retention block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#quantity_based_retention GoogleAlloydbCluster#quantity_based_retention}

---

##### `TimeBasedRetention`<sup>Optional</sup> <a name="TimeBasedRetention" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.timeBasedRetention"></a>

```csharp
public GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention TimeBasedRetention { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention</a>

time_based_retention block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#time_based_retention GoogleAlloydbCluster#time_based_retention}

---

##### `WeeklySchedule`<sup>Optional</sup> <a name="WeeklySchedule" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.weeklySchedule"></a>

```csharp
public GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule WeeklySchedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule">GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule</a>

weekly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#weekly_schedule GoogleAlloydbCluster#weekly_schedule}

---

### GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig <a name="GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig {
    string KmsKeyName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | The fully-qualified resource name of the KMS key. |

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

The fully-qualified resource name of the KMS key.

Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#kms_key_name GoogleAlloydbCluster#kms_key_name}

---

### GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention <a name="GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention {
    double Count = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention.property.count">Count</a></code> | <code>double</code> | The number of backups to retain. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

The number of backups to retain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#count GoogleAlloydbCluster#count}

---

### GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention <a name="GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention {
    string RetentionPeriod = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention.property.retentionPeriod">RetentionPeriod</a></code> | <code>string</code> | The retention period. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". |

---

##### `RetentionPeriod`<sup>Optional</sup> <a name="RetentionPeriod" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention.property.retentionPeriod"></a>

```csharp
public string RetentionPeriod { get; set; }
```

- *Type:* string

The retention period. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#retention_period GoogleAlloydbCluster#retention_period}

---

### GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule <a name="GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule {
    object StartTimes,
    string[] DaysOfWeek = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule.property.startTimes">StartTimes</a></code> | <code>object</code> | start_times block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | The days of the week to perform a backup. |

---

##### `StartTimes`<sup>Required</sup> <a name="StartTimes" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule.property.startTimes"></a>

```csharp
public object StartTimes { get; set; }
```

- *Type:* object

start_times block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#start_times GoogleAlloydbCluster#start_times}

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; set; }
```

- *Type:* string[]

The days of the week to perform a backup.

At least one day of the week must be provided. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#days_of_week GoogleAlloydbCluster#days_of_week}

---

### GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes <a name="GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes {
    double Hours = null,
    double Minutes = null,
    double Nanos = null,
    double Seconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.property.hours">Hours</a></code> | <code>double</code> | Hours of day in 24 hour format. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.property.minutes">Minutes</a></code> | <code>double</code> | Minutes of hour of day. Currently, only the value 0 is supported. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.property.nanos">Nanos</a></code> | <code>double</code> | Fractions of seconds in nanoseconds. Currently, only the value 0 is supported. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.property.seconds">Seconds</a></code> | <code>double</code> | Seconds of minutes of the time. Currently, only the value 0 is supported. |

---

##### `Hours`<sup>Optional</sup> <a name="Hours" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.property.hours"></a>

```csharp
public double Hours { get; set; }
```

- *Type:* double

Hours of day in 24 hour format.

Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#hours GoogleAlloydbCluster#hours}

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.property.minutes"></a>

```csharp
public double Minutes { get; set; }
```

- *Type:* double

Minutes of hour of day. Currently, only the value 0 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#minutes GoogleAlloydbCluster#minutes}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.property.nanos"></a>

```csharp
public double Nanos { get; set; }
```

- *Type:* double

Fractions of seconds in nanoseconds. Currently, only the value 0 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#nanos GoogleAlloydbCluster#nanos}

---

##### `Seconds`<sup>Optional</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.property.seconds"></a>

```csharp
public double Seconds { get; set; }
```

- *Type:* double

Seconds of minutes of the time. Currently, only the value 0 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#seconds GoogleAlloydbCluster#seconds}

---

### GoogleAlloydbClusterBackupSource <a name="GoogleAlloydbClusterBackupSource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterBackupSource {

};
```


### GoogleAlloydbClusterConfig <a name="GoogleAlloydbClusterConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterId,
    string Location,
    string Network,
    GoogleAlloydbClusterAutomatedBackupPolicy AutomatedBackupPolicy = null,
    GoogleAlloydbClusterContinuousBackupConfig ContinuousBackupConfig = null,
    string DisplayName = null,
    GoogleAlloydbClusterEncryptionConfig EncryptionConfig = null,
    string Id = null,
    GoogleAlloydbClusterInitialUser InitialUser = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleAlloydbClusterRestoreBackupSource RestoreBackupSource = null,
    GoogleAlloydbClusterRestoreContinuousBackupSource RestoreContinuousBackupSource = null,
    GoogleAlloydbClusterTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | The ID of the alloydb cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.location">Location</a></code> | <code>string</code> | The location where the alloydb cluster should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.network">Network</a></code> | <code>string</code> | The relative resource name of the VPC network on which the instance can be accessed. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.automatedBackupPolicy">AutomatedBackupPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy">GoogleAlloydbClusterAutomatedBackupPolicy</a></code> | automated_backup_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.continuousBackupConfig">ContinuousBackupConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig">GoogleAlloydbClusterContinuousBackupConfig</a></code> | continuous_backup_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.displayName">DisplayName</a></code> | <code>string</code> | User-settable and human-readable display name for the Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfig">GoogleAlloydbClusterEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#id GoogleAlloydbCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.initialUser">InitialUser</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser">GoogleAlloydbClusterInitialUser</a></code> | initial_user block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User-defined labels for the alloydb cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#project GoogleAlloydbCluster#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.restoreBackupSource">RestoreBackupSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSource">GoogleAlloydbClusterRestoreBackupSource</a></code> | restore_backup_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.restoreContinuousBackupSource">RestoreContinuousBackupSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource">GoogleAlloydbClusterRestoreContinuousBackupSource</a></code> | restore_continuous_backup_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts">GoogleAlloydbClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

The ID of the alloydb cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#cluster_id GoogleAlloydbCluster#cluster_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location where the alloydb cluster should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#location GoogleAlloydbCluster#location}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The relative resource name of the VPC network on which the instance can be accessed.

It is specified in the following form:

"projects/{projectNumber}/global/networks/{network_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#network GoogleAlloydbCluster#network}

---

##### `AutomatedBackupPolicy`<sup>Optional</sup> <a name="AutomatedBackupPolicy" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.automatedBackupPolicy"></a>

```csharp
public GoogleAlloydbClusterAutomatedBackupPolicy AutomatedBackupPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy">GoogleAlloydbClusterAutomatedBackupPolicy</a>

automated_backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#automated_backup_policy GoogleAlloydbCluster#automated_backup_policy}

---

##### `ContinuousBackupConfig`<sup>Optional</sup> <a name="ContinuousBackupConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.continuousBackupConfig"></a>

```csharp
public GoogleAlloydbClusterContinuousBackupConfig ContinuousBackupConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig">GoogleAlloydbClusterContinuousBackupConfig</a>

continuous_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#continuous_backup_config GoogleAlloydbCluster#continuous_backup_config}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

User-settable and human-readable display name for the Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#display_name GoogleAlloydbCluster#display_name}

---

##### `EncryptionConfig`<sup>Optional</sup> <a name="EncryptionConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.encryptionConfig"></a>

```csharp
public GoogleAlloydbClusterEncryptionConfig EncryptionConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfig">GoogleAlloydbClusterEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#encryption_config GoogleAlloydbCluster#encryption_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#id GoogleAlloydbCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitialUser`<sup>Optional</sup> <a name="InitialUser" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.initialUser"></a>

```csharp
public GoogleAlloydbClusterInitialUser InitialUser { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser">GoogleAlloydbClusterInitialUser</a>

initial_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#initial_user GoogleAlloydbCluster#initial_user}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User-defined labels for the alloydb cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#labels GoogleAlloydbCluster#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#project GoogleAlloydbCluster#project}.

---

##### `RestoreBackupSource`<sup>Optional</sup> <a name="RestoreBackupSource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.restoreBackupSource"></a>

```csharp
public GoogleAlloydbClusterRestoreBackupSource RestoreBackupSource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSource">GoogleAlloydbClusterRestoreBackupSource</a>

restore_backup_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#restore_backup_source GoogleAlloydbCluster#restore_backup_source}

---

##### `RestoreContinuousBackupSource`<sup>Optional</sup> <a name="RestoreContinuousBackupSource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.restoreContinuousBackupSource"></a>

```csharp
public GoogleAlloydbClusterRestoreContinuousBackupSource RestoreContinuousBackupSource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource">GoogleAlloydbClusterRestoreContinuousBackupSource</a>

restore_continuous_backup_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#restore_continuous_backup_source GoogleAlloydbCluster#restore_continuous_backup_source}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.timeouts"></a>

```csharp
public GoogleAlloydbClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts">GoogleAlloydbClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#timeouts GoogleAlloydbCluster#timeouts}

---

### GoogleAlloydbClusterContinuousBackupConfig <a name="GoogleAlloydbClusterContinuousBackupConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterContinuousBackupConfig {
    object Enabled = null,
    GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig EncryptionConfig = null,
    double RecoveryWindowDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig.property.enabled">Enabled</a></code> | <code>object</code> | Whether continuous backup recovery is enabled. If not set, defaults to true. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig">GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig.property.recoveryWindowDays">RecoveryWindowDays</a></code> | <code>double</code> | The numbers of days that are eligible to restore from using PITR. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether continuous backup recovery is enabled. If not set, defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#enabled GoogleAlloydbCluster#enabled}

---

##### `EncryptionConfig`<sup>Optional</sup> <a name="EncryptionConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig.property.encryptionConfig"></a>

```csharp
public GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig EncryptionConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig">GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#encryption_config GoogleAlloydbCluster#encryption_config}

---

##### `RecoveryWindowDays`<sup>Optional</sup> <a name="RecoveryWindowDays" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig.property.recoveryWindowDays"></a>

```csharp
public double RecoveryWindowDays { get; set; }
```

- *Type:* double

The numbers of days that are eligible to restore from using PITR.

To support the entire recovery window, backups and logs are retained for one day more than the recovery window.

If not set, defaults to 14 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#recovery_window_days GoogleAlloydbCluster#recovery_window_days}

---

### GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig <a name="GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig {
    string KmsKeyName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | The fully-qualified resource name of the KMS key. |

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

The fully-qualified resource name of the KMS key.

Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#kms_key_name GoogleAlloydbCluster#kms_key_name}

---

### GoogleAlloydbClusterContinuousBackupInfo <a name="GoogleAlloydbClusterContinuousBackupInfo" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterContinuousBackupInfo {

};
```


### GoogleAlloydbClusterContinuousBackupInfoEncryptionInfo <a name="GoogleAlloydbClusterContinuousBackupInfoEncryptionInfo" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterContinuousBackupInfoEncryptionInfo {

};
```


### GoogleAlloydbClusterEncryptionConfig <a name="GoogleAlloydbClusterEncryptionConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterEncryptionConfig {
    string KmsKeyName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | The fully-qualified resource name of the KMS key. |

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfig.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

The fully-qualified resource name of the KMS key.

Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#kms_key_name GoogleAlloydbCluster#kms_key_name}

---

### GoogleAlloydbClusterEncryptionInfo <a name="GoogleAlloydbClusterEncryptionInfo" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterEncryptionInfo {

};
```


### GoogleAlloydbClusterInitialUser <a name="GoogleAlloydbClusterInitialUser" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterInitialUser {
    string Password,
    string User = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser.property.password">Password</a></code> | <code>string</code> | The initial password for the user. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser.property.user">User</a></code> | <code>string</code> | The database username. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The initial password for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#password GoogleAlloydbCluster#password}

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser.property.user"></a>

```csharp
public string User { get; set; }
```

- *Type:* string

The database username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#user GoogleAlloydbCluster#user}

---

### GoogleAlloydbClusterMigrationSource <a name="GoogleAlloydbClusterMigrationSource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterMigrationSource {

};
```


### GoogleAlloydbClusterRestoreBackupSource <a name="GoogleAlloydbClusterRestoreBackupSource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterRestoreBackupSource {
    string BackupName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSource.property.backupName">BackupName</a></code> | <code>string</code> | The name of the backup that this cluster is restored from. |

---

##### `BackupName`<sup>Required</sup> <a name="BackupName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSource.property.backupName"></a>

```csharp
public string BackupName { get; set; }
```

- *Type:* string

The name of the backup that this cluster is restored from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#backup_name GoogleAlloydbCluster#backup_name}

---

### GoogleAlloydbClusterRestoreContinuousBackupSource <a name="GoogleAlloydbClusterRestoreContinuousBackupSource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterRestoreContinuousBackupSource {
    string Cluster,
    string PointInTime
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource.property.cluster">Cluster</a></code> | <code>string</code> | The name of the source cluster that this cluster is restored from. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource.property.pointInTime">PointInTime</a></code> | <code>string</code> | The point in time that this cluster is restored to, in RFC 3339 format. |

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource.property.cluster"></a>

```csharp
public string Cluster { get; set; }
```

- *Type:* string

The name of the source cluster that this cluster is restored from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#cluster GoogleAlloydbCluster#cluster}

---

##### `PointInTime`<sup>Required</sup> <a name="PointInTime" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource.property.pointInTime"></a>

```csharp
public string PointInTime { get; set; }
```

- *Type:* string

The point in time that this cluster is restored to, in RFC 3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#point_in_time GoogleAlloydbCluster#point_in_time}

---

### GoogleAlloydbClusterTimeouts <a name="GoogleAlloydbClusterTimeouts" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#create GoogleAlloydbCluster#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#delete GoogleAlloydbCluster#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#update GoogleAlloydbCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#create GoogleAlloydbCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#delete GoogleAlloydbCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_alloydb_cluster#update GoogleAlloydbCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference <a name="GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.resetKmsKeyName"></a>

```csharp
private void ResetKmsKeyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig">GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig">GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig</a>

---


### GoogleAlloydbClusterAutomatedBackupPolicyOutputReference <a name="GoogleAlloydbClusterAutomatedBackupPolicyOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterAutomatedBackupPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.putEncryptionConfig">PutEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.putQuantityBasedRetention">PutQuantityBasedRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.putTimeBasedRetention">PutTimeBasedRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.putWeeklySchedule">PutWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetBackupWindow">ResetBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetEncryptionConfig">ResetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetQuantityBasedRetention">ResetQuantityBasedRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetTimeBasedRetention">ResetTimeBasedRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetWeeklySchedule">ResetWeeklySchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionConfig` <a name="PutEncryptionConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.putEncryptionConfig"></a>

```csharp
private void PutEncryptionConfig(GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig">GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig</a>

---

##### `PutQuantityBasedRetention` <a name="PutQuantityBasedRetention" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.putQuantityBasedRetention"></a>

```csharp
private void PutQuantityBasedRetention(GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.putQuantityBasedRetention.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention</a>

---

##### `PutTimeBasedRetention` <a name="PutTimeBasedRetention" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.putTimeBasedRetention"></a>

```csharp
private void PutTimeBasedRetention(GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.putTimeBasedRetention.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention</a>

---

##### `PutWeeklySchedule` <a name="PutWeeklySchedule" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.putWeeklySchedule"></a>

```csharp
private void PutWeeklySchedule(GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.putWeeklySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule">GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule</a>

---

##### `ResetBackupWindow` <a name="ResetBackupWindow" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetBackupWindow"></a>

```csharp
private void ResetBackupWindow()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetEncryptionConfig` <a name="ResetEncryptionConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetEncryptionConfig"></a>

```csharp
private void ResetEncryptionConfig()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetQuantityBasedRetention` <a name="ResetQuantityBasedRetention" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetQuantityBasedRetention"></a>

```csharp
private void ResetQuantityBasedRetention()
```

##### `ResetTimeBasedRetention` <a name="ResetTimeBasedRetention" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetTimeBasedRetention"></a>

```csharp
private void ResetTimeBasedRetention()
```

##### `ResetWeeklySchedule` <a name="ResetWeeklySchedule" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetWeeklySchedule"></a>

```csharp
private void ResetWeeklySchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference">GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.quantityBasedRetention">QuantityBasedRetention</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference">GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.timeBasedRetention">TimeBasedRetention</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference">GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.weeklySchedule">WeeklySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference">GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.backupWindowInput">BackupWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.encryptionConfigInput">EncryptionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig">GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.quantityBasedRetentionInput">QuantityBasedRetentionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.timeBasedRetentionInput">TimeBasedRetentionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.weeklyScheduleInput">WeeklyScheduleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule">GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.backupWindow">BackupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy">GoogleAlloydbClusterAutomatedBackupPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionConfig`<sup>Required</sup> <a name="EncryptionConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.encryptionConfig"></a>

```csharp
public GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference EncryptionConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference">GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference</a>

---

##### `QuantityBasedRetention`<sup>Required</sup> <a name="QuantityBasedRetention" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.quantityBasedRetention"></a>

```csharp
public GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference QuantityBasedRetention { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference">GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference</a>

---

##### `TimeBasedRetention`<sup>Required</sup> <a name="TimeBasedRetention" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.timeBasedRetention"></a>

```csharp
public GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference TimeBasedRetention { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference">GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference</a>

---

##### `WeeklySchedule`<sup>Required</sup> <a name="WeeklySchedule" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.weeklySchedule"></a>

```csharp
public GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference WeeklySchedule { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference">GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference</a>

---

##### `BackupWindowInput`<sup>Optional</sup> <a name="BackupWindowInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.backupWindowInput"></a>

```csharp
public string BackupWindowInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `EncryptionConfigInput`<sup>Optional</sup> <a name="EncryptionConfigInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.encryptionConfigInput"></a>

```csharp
public GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig EncryptionConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig">GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `QuantityBasedRetentionInput`<sup>Optional</sup> <a name="QuantityBasedRetentionInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.quantityBasedRetentionInput"></a>

```csharp
public GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention QuantityBasedRetentionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention</a>

---

##### `TimeBasedRetentionInput`<sup>Optional</sup> <a name="TimeBasedRetentionInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.timeBasedRetentionInput"></a>

```csharp
public GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention TimeBasedRetentionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention</a>

---

##### `WeeklyScheduleInput`<sup>Optional</sup> <a name="WeeklyScheduleInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.weeklyScheduleInput"></a>

```csharp
public GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule WeeklyScheduleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule">GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule</a>

---

##### `BackupWindow`<sup>Required</sup> <a name="BackupWindow" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.backupWindow"></a>

```csharp
public string BackupWindow { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleAlloydbClusterAutomatedBackupPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy">GoogleAlloydbClusterAutomatedBackupPolicy</a>

---


### GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference <a name="GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.resetCount">ResetCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.resetCount"></a>

```csharp
private void ResetCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.internalValue"></a>

```csharp
public GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention</a>

---


### GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference <a name="GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.resetRetentionPeriod">ResetRetentionPeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRetentionPeriod` <a name="ResetRetentionPeriod" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.resetRetentionPeriod"></a>

```csharp
private void ResetRetentionPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.retentionPeriodInput">RetentionPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.retentionPeriod">RetentionPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RetentionPeriodInput`<sup>Optional</sup> <a name="RetentionPeriodInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.retentionPeriodInput"></a>

```csharp
public string RetentionPeriodInput { get; }
```

- *Type:* string

---

##### `RetentionPeriod`<sup>Required</sup> <a name="RetentionPeriod" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.retentionPeriod"></a>

```csharp
public string RetentionPeriod { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.internalValue"></a>

```csharp
public GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention</a>

---


### GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference <a name="GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.putStartTimes">PutStartTimes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStartTimes` <a name="PutStartTimes" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.putStartTimes"></a>

```csharp
private void PutStartTimes(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.putStartTimes.parameter.value"></a>

- *Type:* object

---

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.resetDaysOfWeek"></a>

```csharp
private void ResetDaysOfWeek()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.startTimes">StartTimes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList">GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.startTimesInput">StartTimesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule">GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StartTimes`<sup>Required</sup> <a name="StartTimes" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.startTimes"></a>

```csharp
public GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList StartTimes { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList">GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList</a>

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.daysOfWeekInput"></a>

```csharp
public string[] DaysOfWeekInput { get; }
```

- *Type:* string[]

---

##### `StartTimesInput`<sup>Optional</sup> <a name="StartTimesInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.startTimesInput"></a>

```csharp
public object StartTimesInput { get; }
```

- *Type:* object

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.internalValue"></a>

```csharp
public GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule">GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule</a>

---


### GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList <a name="GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.get"></a>

```csharp
private GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference <a name="GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resetHours">ResetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resetMinutes">ResetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resetSeconds">ResetSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHours` <a name="ResetHours" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resetHours"></a>

```csharp
private void ResetHours()
```

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resetMinutes"></a>

```csharp
private void ResetMinutes()
```

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resetNanos"></a>

```csharp
private void ResetNanos()
```

##### `ResetSeconds` <a name="ResetSeconds" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resetSeconds"></a>

```csharp
private void ResetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.hoursInput">HoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.minutesInput">MinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.nanosInput">NanosInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.secondsInput">SecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.hours">Hours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.minutes">Minutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.hoursInput"></a>

```csharp
public double HoursInput { get; }
```

- *Type:* double

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.minutesInput"></a>

```csharp
public double MinutesInput { get; }
```

- *Type:* double

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.nanosInput"></a>

```csharp
public double NanosInput { get; }
```

- *Type:* double

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.secondsInput"></a>

```csharp
public double SecondsInput { get; }
```

- *Type:* double

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.hours"></a>

```csharp
public double Hours { get; }
```

- *Type:* double

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.minutes"></a>

```csharp
public double Minutes { get; }
```

- *Type:* double

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAlloydbClusterBackupSourceList <a name="GoogleAlloydbClusterBackupSourceList" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterBackupSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.get"></a>

```csharp
private GoogleAlloydbClusterBackupSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleAlloydbClusterBackupSourceOutputReference <a name="GoogleAlloydbClusterBackupSourceOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterBackupSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.property.backupName">BackupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSource">GoogleAlloydbClusterBackupSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupName`<sup>Required</sup> <a name="BackupName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.property.backupName"></a>

```csharp
public string BackupName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.property.internalValue"></a>

```csharp
public GoogleAlloydbClusterBackupSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSource">GoogleAlloydbClusterBackupSource</a>

---


### GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference <a name="GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.resetKmsKeyName"></a>

```csharp
private void ResetKmsKeyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig">GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig">GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig</a>

---


### GoogleAlloydbClusterContinuousBackupConfigOutputReference <a name="GoogleAlloydbClusterContinuousBackupConfigOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterContinuousBackupConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.putEncryptionConfig">PutEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.resetEncryptionConfig">ResetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.resetRecoveryWindowDays">ResetRecoveryWindowDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionConfig` <a name="PutEncryptionConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.putEncryptionConfig"></a>

```csharp
private void PutEncryptionConfig(GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig">GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetEncryptionConfig` <a name="ResetEncryptionConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.resetEncryptionConfig"></a>

```csharp
private void ResetEncryptionConfig()
```

##### `ResetRecoveryWindowDays` <a name="ResetRecoveryWindowDays" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.resetRecoveryWindowDays"></a>

```csharp
private void ResetRecoveryWindowDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference">GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.encryptionConfigInput">EncryptionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig">GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.recoveryWindowDaysInput">RecoveryWindowDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.recoveryWindowDays">RecoveryWindowDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig">GoogleAlloydbClusterContinuousBackupConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionConfig`<sup>Required</sup> <a name="EncryptionConfig" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.encryptionConfig"></a>

```csharp
public GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference EncryptionConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference">GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `EncryptionConfigInput`<sup>Optional</sup> <a name="EncryptionConfigInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.encryptionConfigInput"></a>

```csharp
public GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig EncryptionConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig">GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig</a>

---

##### `RecoveryWindowDaysInput`<sup>Optional</sup> <a name="RecoveryWindowDaysInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.recoveryWindowDaysInput"></a>

```csharp
public double RecoveryWindowDaysInput { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `RecoveryWindowDays`<sup>Required</sup> <a name="RecoveryWindowDays" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.recoveryWindowDays"></a>

```csharp
public double RecoveryWindowDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleAlloydbClusterContinuousBackupConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig">GoogleAlloydbClusterContinuousBackupConfig</a>

---


### GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList <a name="GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.get"></a>

```csharp
private GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference <a name="GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.encryptionType">EncryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.kmsKeyVersions">KmsKeyVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfo">GoogleAlloydbClusterContinuousBackupInfoEncryptionInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.encryptionType"></a>

```csharp
public string EncryptionType { get; }
```

- *Type:* string

---

##### `KmsKeyVersions`<sup>Required</sup> <a name="KmsKeyVersions" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.kmsKeyVersions"></a>

```csharp
public string[] KmsKeyVersions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.internalValue"></a>

```csharp
public GoogleAlloydbClusterContinuousBackupInfoEncryptionInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfo">GoogleAlloydbClusterContinuousBackupInfoEncryptionInfo</a>

---


### GoogleAlloydbClusterContinuousBackupInfoList <a name="GoogleAlloydbClusterContinuousBackupInfoList" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterContinuousBackupInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.get"></a>

```csharp
private GoogleAlloydbClusterContinuousBackupInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleAlloydbClusterContinuousBackupInfoOutputReference <a name="GoogleAlloydbClusterContinuousBackupInfoOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterContinuousBackupInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.earliestRestorableTime">EarliestRestorableTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.enabledTime">EnabledTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.encryptionInfo">EncryptionInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList">GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.schedule">Schedule</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfo">GoogleAlloydbClusterContinuousBackupInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EarliestRestorableTime`<sup>Required</sup> <a name="EarliestRestorableTime" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.earliestRestorableTime"></a>

```csharp
public string EarliestRestorableTime { get; }
```

- *Type:* string

---

##### `EnabledTime`<sup>Required</sup> <a name="EnabledTime" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.enabledTime"></a>

```csharp
public string EnabledTime { get; }
```

- *Type:* string

---

##### `EncryptionInfo`<sup>Required</sup> <a name="EncryptionInfo" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.encryptionInfo"></a>

```csharp
public GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList EncryptionInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList">GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.schedule"></a>

```csharp
public string[] Schedule { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.internalValue"></a>

```csharp
public GoogleAlloydbClusterContinuousBackupInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfo">GoogleAlloydbClusterContinuousBackupInfo</a>

---


### GoogleAlloydbClusterEncryptionConfigOutputReference <a name="GoogleAlloydbClusterEncryptionConfigOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterEncryptionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.resetKmsKeyName"></a>

```csharp
private void ResetKmsKeyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfig">GoogleAlloydbClusterEncryptionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleAlloydbClusterEncryptionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfig">GoogleAlloydbClusterEncryptionConfig</a>

---


### GoogleAlloydbClusterEncryptionInfoList <a name="GoogleAlloydbClusterEncryptionInfoList" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterEncryptionInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.get"></a>

```csharp
private GoogleAlloydbClusterEncryptionInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleAlloydbClusterEncryptionInfoOutputReference <a name="GoogleAlloydbClusterEncryptionInfoOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterEncryptionInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.property.encryptionType">EncryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.property.kmsKeyVersions">KmsKeyVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfo">GoogleAlloydbClusterEncryptionInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.property.encryptionType"></a>

```csharp
public string EncryptionType { get; }
```

- *Type:* string

---

##### `KmsKeyVersions`<sup>Required</sup> <a name="KmsKeyVersions" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.property.kmsKeyVersions"></a>

```csharp
public string[] KmsKeyVersions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.property.internalValue"></a>

```csharp
public GoogleAlloydbClusterEncryptionInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfo">GoogleAlloydbClusterEncryptionInfo</a>

---


### GoogleAlloydbClusterInitialUserOutputReference <a name="GoogleAlloydbClusterInitialUserOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterInitialUserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.resetUser">ResetUser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUser` <a name="ResetUser" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.resetUser"></a>

```csharp
private void ResetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.userInput">UserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.user">User</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser">GoogleAlloydbClusterInitialUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.userInput"></a>

```csharp
public string UserInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.user"></a>

```csharp
public string User { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.internalValue"></a>

```csharp
public GoogleAlloydbClusterInitialUser InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser">GoogleAlloydbClusterInitialUser</a>

---


### GoogleAlloydbClusterMigrationSourceList <a name="GoogleAlloydbClusterMigrationSourceList" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterMigrationSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.get"></a>

```csharp
private GoogleAlloydbClusterMigrationSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleAlloydbClusterMigrationSourceOutputReference <a name="GoogleAlloydbClusterMigrationSourceOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterMigrationSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.property.hostPort">HostPort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.property.referenceId">ReferenceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSource">GoogleAlloydbClusterMigrationSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostPort`<sup>Required</sup> <a name="HostPort" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.property.hostPort"></a>

```csharp
public string HostPort { get; }
```

- *Type:* string

---

##### `ReferenceId`<sup>Required</sup> <a name="ReferenceId" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.property.referenceId"></a>

```csharp
public string ReferenceId { get; }
```

- *Type:* string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.property.internalValue"></a>

```csharp
public GoogleAlloydbClusterMigrationSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSource">GoogleAlloydbClusterMigrationSource</a>

---


### GoogleAlloydbClusterRestoreBackupSourceOutputReference <a name="GoogleAlloydbClusterRestoreBackupSourceOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterRestoreBackupSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.property.backupNameInput">BackupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.property.backupName">BackupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSource">GoogleAlloydbClusterRestoreBackupSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupNameInput`<sup>Optional</sup> <a name="BackupNameInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.property.backupNameInput"></a>

```csharp
public string BackupNameInput { get; }
```

- *Type:* string

---

##### `BackupName`<sup>Required</sup> <a name="BackupName" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.property.backupName"></a>

```csharp
public string BackupName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.property.internalValue"></a>

```csharp
public GoogleAlloydbClusterRestoreBackupSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSource">GoogleAlloydbClusterRestoreBackupSource</a>

---


### GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference <a name="GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.clusterInput">ClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.pointInTimeInput">PointInTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.cluster">Cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.pointInTime">PointInTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource">GoogleAlloydbClusterRestoreContinuousBackupSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.clusterInput"></a>

```csharp
public string ClusterInput { get; }
```

- *Type:* string

---

##### `PointInTimeInput`<sup>Optional</sup> <a name="PointInTimeInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.pointInTimeInput"></a>

```csharp
public string PointInTimeInput { get; }
```

- *Type:* string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.cluster"></a>

```csharp
public string Cluster { get; }
```

- *Type:* string

---

##### `PointInTime`<sup>Required</sup> <a name="PointInTime" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.pointInTime"></a>

```csharp
public string PointInTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.internalValue"></a>

```csharp
public GoogleAlloydbClusterRestoreContinuousBackupSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource">GoogleAlloydbClusterRestoreContinuousBackupSource</a>

---


### GoogleAlloydbClusterTimeoutsOutputReference <a name="GoogleAlloydbClusterTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAlloydbClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



