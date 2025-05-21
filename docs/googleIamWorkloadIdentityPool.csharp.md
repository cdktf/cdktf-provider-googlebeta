# `googleIamWorkloadIdentityPool` Submodule <a name="`googleIamWorkloadIdentityPool` Submodule" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamWorkloadIdentityPool <a name="GoogleIamWorkloadIdentityPool" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_iam_workload_identity_pool google_iam_workload_identity_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamWorkloadIdentityPool(Construct Scope, string Id, GoogleIamWorkloadIdentityPoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig">GoogleIamWorkloadIdentityPoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig">GoogleIamWorkloadIdentityPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.putInlineCertificateIssuanceConfig">PutInlineCertificateIssuanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.putInlineTrustConfig">PutInlineTrustConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.resetInlineCertificateIssuanceConfig">ResetInlineCertificateIssuanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.resetInlineTrustConfig">ResetInlineTrustConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInlineCertificateIssuanceConfig` <a name="PutInlineCertificateIssuanceConfig" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.putInlineCertificateIssuanceConfig"></a>

```csharp
private void PutInlineCertificateIssuanceConfig(GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.putInlineCertificateIssuanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig">GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig</a>

---

##### `PutInlineTrustConfig` <a name="PutInlineTrustConfig" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.putInlineTrustConfig"></a>

```csharp
private void PutInlineTrustConfig(GoogleIamWorkloadIdentityPoolInlineTrustConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.putInlineTrustConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfig">GoogleIamWorkloadIdentityPoolInlineTrustConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleIamWorkloadIdentityPoolTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeouts">GoogleIamWorkloadIdentityPoolTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInlineCertificateIssuanceConfig` <a name="ResetInlineCertificateIssuanceConfig" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.resetInlineCertificateIssuanceConfig"></a>

```csharp
private void ResetInlineCertificateIssuanceConfig()
```

##### `ResetInlineTrustConfig` <a name="ResetInlineTrustConfig" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.resetInlineTrustConfig"></a>

```csharp
private void ResetInlineTrustConfig()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIamWorkloadIdentityPool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIamWorkloadIdentityPool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIamWorkloadIdentityPool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIamWorkloadIdentityPool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIamWorkloadIdentityPool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleIamWorkloadIdentityPool resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIamWorkloadIdentityPool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIamWorkloadIdentityPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_iam_workload_identity_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIamWorkloadIdentityPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.inlineCertificateIssuanceConfig">InlineCertificateIssuanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference">GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.inlineTrustConfig">InlineTrustConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference">GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference">GoogleIamWorkloadIdentityPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.inlineCertificateIssuanceConfigInput">InlineCertificateIssuanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig">GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.inlineTrustConfigInput">InlineTrustConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfig">GoogleIamWorkloadIdentityPoolInlineTrustConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.workloadIdentityPoolIdInput">WorkloadIdentityPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.workloadIdentityPoolId">WorkloadIdentityPoolId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `InlineCertificateIssuanceConfig`<sup>Required</sup> <a name="InlineCertificateIssuanceConfig" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.inlineCertificateIssuanceConfig"></a>

```csharp
public GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference InlineCertificateIssuanceConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference">GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference</a>

---

##### `InlineTrustConfig`<sup>Required</sup> <a name="InlineTrustConfig" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.inlineTrustConfig"></a>

```csharp
public GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference InlineTrustConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference">GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.timeouts"></a>

```csharp
public GoogleIamWorkloadIdentityPoolTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference">GoogleIamWorkloadIdentityPoolTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InlineCertificateIssuanceConfigInput`<sup>Optional</sup> <a name="InlineCertificateIssuanceConfigInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.inlineCertificateIssuanceConfigInput"></a>

```csharp
public GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig InlineCertificateIssuanceConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig">GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig</a>

---

##### `InlineTrustConfigInput`<sup>Optional</sup> <a name="InlineTrustConfigInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.inlineTrustConfigInput"></a>

```csharp
public GoogleIamWorkloadIdentityPoolInlineTrustConfig InlineTrustConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfig">GoogleIamWorkloadIdentityPoolInlineTrustConfig</a>

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WorkloadIdentityPoolIdInput`<sup>Optional</sup> <a name="WorkloadIdentityPoolIdInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.workloadIdentityPoolIdInput"></a>

```csharp
public string WorkloadIdentityPoolIdInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `WorkloadIdentityPoolId`<sup>Required</sup> <a name="WorkloadIdentityPoolId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.workloadIdentityPoolId"></a>

```csharp
public string WorkloadIdentityPoolId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamWorkloadIdentityPoolConfig <a name="GoogleIamWorkloadIdentityPoolConfig" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamWorkloadIdentityPoolConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string WorkloadIdentityPoolId,
    string Description = null,
    object Disabled = null,
    string DisplayName = null,
    string Id = null,
    GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig InlineCertificateIssuanceConfig = null,
    GoogleIamWorkloadIdentityPoolInlineTrustConfig InlineTrustConfig = null,
    string Mode = null,
    string Project = null,
    GoogleIamWorkloadIdentityPoolTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig.property.workloadIdentityPoolId">WorkloadIdentityPoolId</a></code> | <code>string</code> | The ID to use for the pool, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig.property.description">Description</a></code> | <code>string</code> | A description of the pool. Cannot exceed 256 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig.property.disabled">Disabled</a></code> | <code>object</code> | Whether the pool is disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig.property.displayName">DisplayName</a></code> | <code>string</code> | A display name for the pool. Cannot exceed 32 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_iam_workload_identity_pool#id GoogleIamWorkloadIdentityPool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig.property.inlineCertificateIssuanceConfig">InlineCertificateIssuanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig">GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig</a></code> | inline_certificate_issuance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig.property.inlineTrustConfig">InlineTrustConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfig">GoogleIamWorkloadIdentityPoolInlineTrustConfig</a></code> | inline_trust_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig.property.mode">Mode</a></code> | <code>string</code> | The mode for the pool is operating in. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_iam_workload_identity_pool#project GoogleIamWorkloadIdentityPool#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeouts">GoogleIamWorkloadIdentityPoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `WorkloadIdentityPoolId`<sup>Required</sup> <a name="WorkloadIdentityPoolId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig.property.workloadIdentityPoolId"></a>

```csharp
public string WorkloadIdentityPoolId { get; set; }
```

- *Type:* string

The ID to use for the pool, which becomes the final component of the resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_iam_workload_identity_pool#workload_identity_pool_id GoogleIamWorkloadIdentityPool#workload_identity_pool_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the pool. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_iam_workload_identity_pool#description GoogleIamWorkloadIdentityPool#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

Whether the pool is disabled.

You cannot use a disabled pool to exchange tokens, or use
existing tokens to access resources. If the pool is re-enabled, existing tokens grant
access again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_iam_workload_identity_pool#disabled GoogleIamWorkloadIdentityPool#disabled}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

A display name for the pool. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_iam_workload_identity_pool#display_name GoogleIamWorkloadIdentityPool#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_iam_workload_identity_pool#id GoogleIamWorkloadIdentityPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InlineCertificateIssuanceConfig`<sup>Optional</sup> <a name="InlineCertificateIssuanceConfig" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig.property.inlineCertificateIssuanceConfig"></a>

```csharp
public GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig InlineCertificateIssuanceConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig">GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig</a>

inline_certificate_issuance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_iam_workload_identity_pool#inline_certificate_issuance_config GoogleIamWorkloadIdentityPool#inline_certificate_issuance_config}

---

##### `InlineTrustConfig`<sup>Optional</sup> <a name="InlineTrustConfig" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig.property.inlineTrustConfig"></a>

```csharp
public GoogleIamWorkloadIdentityPoolInlineTrustConfig InlineTrustConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfig">GoogleIamWorkloadIdentityPoolInlineTrustConfig</a>

inline_trust_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_iam_workload_identity_pool#inline_trust_config GoogleIamWorkloadIdentityPool#inline_trust_config}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

The mode for the pool is operating in.

Pools with an unspecified mode will operate as if they
are in 'FEDERATION_ONLY' mode.

~> **Note** This field cannot be changed after the Workload Identity Pool is created. While
'terraform plan' may show an update if you change this field's value, 'terraform apply'
**will fail with an API error** (such as 'Error 400: Attempted to update an immutable field.').
To specify a different 'mode', please create a new Workload Identity Pool resource.

* 'FEDERATION_ONLY': Pools can only be used for federating external workload identities into
  Google Cloud. Unless otherwise noted, no structure or format constraints are applied to
  workload identities in a 'FEDERATION_ONLY' mode pool, and you may not create any resources
  within the pool besides providers.
* 'TRUST_DOMAIN': Pools can be used to assign identities to Google Cloud workloads. All
  identities within a 'TRUST_DOMAIN' mode pool must consist of a single namespace and individual
  workload identifier. The subject identifier for all identities must conform to the following
  format: 'ns/<namespace>/sa/<workload_identifier>'.
  'google_iam_workload_identity_pool_provider's cannot be created within 'TRUST_DOMAIN'
  mode pools. Possible values: ["FEDERATION_ONLY", "TRUST_DOMAIN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_iam_workload_identity_pool#mode GoogleIamWorkloadIdentityPool#mode}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_iam_workload_identity_pool#project GoogleIamWorkloadIdentityPool#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolConfig.property.timeouts"></a>

```csharp
public GoogleIamWorkloadIdentityPoolTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeouts">GoogleIamWorkloadIdentityPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_iam_workload_identity_pool#timeouts GoogleIamWorkloadIdentityPool#timeouts}

---

### GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig <a name="GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig {
    System.Collections.Generic.IDictionary<string, string> CaPools,
    string KeyAlgorithm = null,
    string Lifetime = null,
    double RotationWindowPercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.caPools">CaPools</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A required mapping of a cloud region to the CA pool resource located in that region used for certificate issuance, adhering to these constraints:  * **Key format:** A supported cloud region name equivalent to the location identifier in the corresponding map entry's value. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>string</code> | Key algorithm to use when generating the key pair. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.lifetime">Lifetime</a></code> | <code>string</code> | Lifetime of the workload certificates issued by the CA pool in seconds. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.rotationWindowPercentage">RotationWindowPercentage</a></code> | <code>double</code> | Rotation window percentage indicating when certificate rotation should be initiated based on remaining lifetime. |

---

##### `CaPools`<sup>Required</sup> <a name="CaPools" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.caPools"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CaPools { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A required mapping of a cloud region to the CA pool resource located in that region used for certificate issuance, adhering to these constraints:  * **Key format:** A supported cloud region name equivalent to the location identifier in the corresponding map entry's value.

* **Value format:** A valid CA pool resource path format like:
  'projects/{project}/locations/{location}/caPools/{ca_pool}'
* **Region Matching:** Workloads are ONLY issued certificates from CA pools within the
  same region. Also the CA pool region (in value) must match the workload's region (key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_iam_workload_identity_pool#ca_pools GoogleIamWorkloadIdentityPool#ca_pools}

---

##### `KeyAlgorithm`<sup>Optional</sup> <a name="KeyAlgorithm" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.keyAlgorithm"></a>

```csharp
public string KeyAlgorithm { get; set; }
```

- *Type:* string

Key algorithm to use when generating the key pair.

This key pair will be used to create
the certificate. If unspecified, this will default to 'ECDSA_P256'.

* 'RSA_2048': Specifies RSA with a 2048-bit modulus.
* 'RSA_3072': Specifies RSA with a 3072-bit modulus.
* 'RSA_4096': Specifies RSA with a 4096-bit modulus.
* 'ECDSA_P256': Specifies ECDSA with curve P256.
* 'ECDSA_P384': Specifies ECDSA with curve P384. Possible values: ["RSA_2048", "RSA_3072", "RSA_4096", "ECDSA_P256", "ECDSA_P384"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_iam_workload_identity_pool#key_algorithm GoogleIamWorkloadIdentityPool#key_algorithm}

---

##### `Lifetime`<sup>Optional</sup> <a name="Lifetime" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.lifetime"></a>

```csharp
public string Lifetime { get; set; }
```

- *Type:* string

Lifetime of the workload certificates issued by the CA pool in seconds.

Must be between
'86400s' (24 hours) to '2592000s' (30 days), ends in the suffix "'s'" (indicating seconds)
and is preceded by the number of seconds. If unspecified, this will be defaulted to
'86400s' (24 hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_iam_workload_identity_pool#lifetime GoogleIamWorkloadIdentityPool#lifetime}

---

##### `RotationWindowPercentage`<sup>Optional</sup> <a name="RotationWindowPercentage" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.rotationWindowPercentage"></a>

```csharp
public double RotationWindowPercentage { get; set; }
```

- *Type:* double

Rotation window percentage indicating when certificate rotation should be initiated based on remaining lifetime.

Must be between '50' - '80'. If unspecified, this will be defaulted
to '50'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_iam_workload_identity_pool#rotation_window_percentage GoogleIamWorkloadIdentityPool#rotation_window_percentage}

---

### GoogleIamWorkloadIdentityPoolInlineTrustConfig <a name="GoogleIamWorkloadIdentityPoolInlineTrustConfig" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamWorkloadIdentityPoolInlineTrustConfig {
    object AdditionalTrustBundles = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfig.property.additionalTrustBundles">AdditionalTrustBundles</a></code> | <code>object</code> | additional_trust_bundles block. |

---

##### `AdditionalTrustBundles`<sup>Optional</sup> <a name="AdditionalTrustBundles" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfig.property.additionalTrustBundles"></a>

```csharp
public object AdditionalTrustBundles { get; set; }
```

- *Type:* object

additional_trust_bundles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_iam_workload_identity_pool#additional_trust_bundles GoogleIamWorkloadIdentityPool#additional_trust_bundles}

---

### GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles <a name="GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles {
    object TrustAnchors,
    string TrustDomain
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles.property.trustAnchors">TrustAnchors</a></code> | <code>object</code> | trust_anchors block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles.property.trustDomain">TrustDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_iam_workload_identity_pool#trust_domain GoogleIamWorkloadIdentityPool#trust_domain}. |

---

##### `TrustAnchors`<sup>Required</sup> <a name="TrustAnchors" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles.property.trustAnchors"></a>

```csharp
public object TrustAnchors { get; set; }
```

- *Type:* object

trust_anchors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_iam_workload_identity_pool#trust_anchors GoogleIamWorkloadIdentityPool#trust_anchors}

---

##### `TrustDomain`<sup>Required</sup> <a name="TrustDomain" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles.property.trustDomain"></a>

```csharp
public string TrustDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_iam_workload_identity_pool#trust_domain GoogleIamWorkloadIdentityPool#trust_domain}.

---

### GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors <a name="GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors {
    string PemCertificate
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors.property.pemCertificate">PemCertificate</a></code> | <code>string</code> | PEM certificate of the PKI used for validation. Must only contain one ca certificate(either root or intermediate cert). |

---

##### `PemCertificate`<sup>Required</sup> <a name="PemCertificate" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors.property.pemCertificate"></a>

```csharp
public string PemCertificate { get; set; }
```

- *Type:* string

PEM certificate of the PKI used for validation. Must only contain one ca certificate(either root or intermediate cert).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_iam_workload_identity_pool#pem_certificate GoogleIamWorkloadIdentityPool#pem_certificate}

---

### GoogleIamWorkloadIdentityPoolTimeouts <a name="GoogleIamWorkloadIdentityPoolTimeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamWorkloadIdentityPoolTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_iam_workload_identity_pool#create GoogleIamWorkloadIdentityPool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_iam_workload_identity_pool#delete GoogleIamWorkloadIdentityPool#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_iam_workload_identity_pool#update GoogleIamWorkloadIdentityPool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_iam_workload_identity_pool#create GoogleIamWorkloadIdentityPool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_iam_workload_identity_pool#delete GoogleIamWorkloadIdentityPool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_iam_workload_identity_pool#update GoogleIamWorkloadIdentityPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference <a name="GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resetKeyAlgorithm">ResetKeyAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resetLifetime">ResetLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resetRotationWindowPercentage">ResetRotationWindowPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyAlgorithm` <a name="ResetKeyAlgorithm" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resetKeyAlgorithm"></a>

```csharp
private void ResetKeyAlgorithm()
```

##### `ResetLifetime` <a name="ResetLifetime" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resetLifetime"></a>

```csharp
private void ResetLifetime()
```

##### `ResetRotationWindowPercentage` <a name="ResetRotationWindowPercentage" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resetRotationWindowPercentage"></a>

```csharp
private void ResetRotationWindowPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.caPoolsInput">CaPoolsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.keyAlgorithmInput">KeyAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.lifetimeInput">LifetimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.rotationWindowPercentageInput">RotationWindowPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.caPools">CaPools</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.lifetime">Lifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.rotationWindowPercentage">RotationWindowPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig">GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaPoolsInput`<sup>Optional</sup> <a name="CaPoolsInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.caPoolsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CaPoolsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `KeyAlgorithmInput`<sup>Optional</sup> <a name="KeyAlgorithmInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.keyAlgorithmInput"></a>

```csharp
public string KeyAlgorithmInput { get; }
```

- *Type:* string

---

##### `LifetimeInput`<sup>Optional</sup> <a name="LifetimeInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.lifetimeInput"></a>

```csharp
public string LifetimeInput { get; }
```

- *Type:* string

---

##### `RotationWindowPercentageInput`<sup>Optional</sup> <a name="RotationWindowPercentageInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.rotationWindowPercentageInput"></a>

```csharp
public double RotationWindowPercentageInput { get; }
```

- *Type:* double

---

##### `CaPools`<sup>Required</sup> <a name="CaPools" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.caPools"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CaPools { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `KeyAlgorithm`<sup>Required</sup> <a name="KeyAlgorithm" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.keyAlgorithm"></a>

```csharp
public string KeyAlgorithm { get; }
```

- *Type:* string

---

##### `Lifetime`<sup>Required</sup> <a name="Lifetime" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.lifetime"></a>

```csharp
public string Lifetime { get; }
```

- *Type:* string

---

##### `RotationWindowPercentage`<sup>Required</sup> <a name="RotationWindowPercentage" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.rotationWindowPercentage"></a>

```csharp
public double RotationWindowPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig">GoogleIamWorkloadIdentityPoolInlineCertificateIssuanceConfig</a>

---


### GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList <a name="GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.get"></a>

```csharp
private GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference <a name="GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.putTrustAnchors">PutTrustAnchors</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTrustAnchors` <a name="PutTrustAnchors" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.putTrustAnchors"></a>

```csharp
private void PutTrustAnchors(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.putTrustAnchors.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustAnchors">TrustAnchors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList">GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustAnchorsInput">TrustAnchorsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustDomainInput">TrustDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustDomain">TrustDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TrustAnchors`<sup>Required</sup> <a name="TrustAnchors" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustAnchors"></a>

```csharp
public GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList TrustAnchors { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList">GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList</a>

---

##### `TrustAnchorsInput`<sup>Optional</sup> <a name="TrustAnchorsInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustAnchorsInput"></a>

```csharp
public object TrustAnchorsInput { get; }
```

- *Type:* object

---

##### `TrustDomainInput`<sup>Optional</sup> <a name="TrustDomainInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustDomainInput"></a>

```csharp
public string TrustDomainInput { get; }
```

- *Type:* string

---

##### `TrustDomain`<sup>Required</sup> <a name="TrustDomain" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustDomain"></a>

```csharp
public string TrustDomain { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList <a name="GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.get"></a>

```csharp
private GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference <a name="GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.pemCertificateInput">PemCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.pemCertificate">PemCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PemCertificateInput`<sup>Optional</sup> <a name="PemCertificateInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.pemCertificateInput"></a>

```csharp
public string PemCertificateInput { get; }
```

- *Type:* string

---

##### `PemCertificate`<sup>Required</sup> <a name="PemCertificate" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.pemCertificate"></a>

```csharp
public string PemCertificate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference <a name="GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.putAdditionalTrustBundles">PutAdditionalTrustBundles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.resetAdditionalTrustBundles">ResetAdditionalTrustBundles</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdditionalTrustBundles` <a name="PutAdditionalTrustBundles" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.putAdditionalTrustBundles"></a>

```csharp
private void PutAdditionalTrustBundles(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.putAdditionalTrustBundles.parameter.value"></a>

- *Type:* object

---

##### `ResetAdditionalTrustBundles` <a name="ResetAdditionalTrustBundles" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.resetAdditionalTrustBundles"></a>

```csharp
private void ResetAdditionalTrustBundles()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.additionalTrustBundles">AdditionalTrustBundles</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList">GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.additionalTrustBundlesInput">AdditionalTrustBundlesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfig">GoogleIamWorkloadIdentityPoolInlineTrustConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalTrustBundles`<sup>Required</sup> <a name="AdditionalTrustBundles" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.additionalTrustBundles"></a>

```csharp
public GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList AdditionalTrustBundles { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList">GoogleIamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList</a>

---

##### `AdditionalTrustBundlesInput`<sup>Optional</sup> <a name="AdditionalTrustBundlesInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.additionalTrustBundlesInput"></a>

```csharp
public object AdditionalTrustBundlesInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleIamWorkloadIdentityPoolInlineTrustConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolInlineTrustConfig">GoogleIamWorkloadIdentityPoolInlineTrustConfig</a>

---


### GoogleIamWorkloadIdentityPoolTimeoutsOutputReference <a name="GoogleIamWorkloadIdentityPoolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamWorkloadIdentityPoolTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPool.GoogleIamWorkloadIdentityPoolTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



