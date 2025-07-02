# `googleIamWorkloadIdentityPoolManagedIdentity` Submodule <a name="`googleIamWorkloadIdentityPoolManagedIdentity` Submodule" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamWorkloadIdentityPoolManagedIdentity <a name="GoogleIamWorkloadIdentityPoolManagedIdentity" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workload_identity_pool_managed_identity google_iam_workload_identity_pool_managed_identity}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamWorkloadIdentityPoolManagedIdentity(Construct Scope, string Id, GoogleIamWorkloadIdentityPoolManagedIdentityConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig">GoogleIamWorkloadIdentityPoolManagedIdentityConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig">GoogleIamWorkloadIdentityPoolManagedIdentityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.putAttestationRules">PutAttestationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetAttestationRules">ResetAttestationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttestationRules` <a name="PutAttestationRules" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.putAttestationRules"></a>

```csharp
private void PutAttestationRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.putAttestationRules.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts">GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts</a>

---

##### `ResetAttestationRules` <a name="ResetAttestationRules" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetAttestationRules"></a>

```csharp
private void ResetAttestationRules()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIamWorkloadIdentityPoolManagedIdentity resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIamWorkloadIdentityPoolManagedIdentity.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIamWorkloadIdentityPoolManagedIdentity.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIamWorkloadIdentityPoolManagedIdentity.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIamWorkloadIdentityPoolManagedIdentity.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleIamWorkloadIdentityPoolManagedIdentity resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIamWorkloadIdentityPoolManagedIdentity to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIamWorkloadIdentityPoolManagedIdentity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workload_identity_pool_managed_identity#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIamWorkloadIdentityPoolManagedIdentity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.attestationRules">AttestationRules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList">GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference">GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.attestationRulesInput">AttestationRulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolIdInput">WorkloadIdentityPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolManagedIdentityIdInput">WorkloadIdentityPoolManagedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolNamespaceIdInput">WorkloadIdentityPoolNamespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolId">WorkloadIdentityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolManagedIdentityId">WorkloadIdentityPoolManagedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolNamespaceId">WorkloadIdentityPoolNamespaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AttestationRules`<sup>Required</sup> <a name="AttestationRules" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.attestationRules"></a>

```csharp
public GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList AttestationRules { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList">GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.timeouts"></a>

```csharp
public GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference">GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference</a>

---

##### `AttestationRulesInput`<sup>Optional</sup> <a name="AttestationRulesInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.attestationRulesInput"></a>

```csharp
public object AttestationRulesInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WorkloadIdentityPoolIdInput`<sup>Optional</sup> <a name="WorkloadIdentityPoolIdInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolIdInput"></a>

```csharp
public string WorkloadIdentityPoolIdInput { get; }
```

- *Type:* string

---

##### `WorkloadIdentityPoolManagedIdentityIdInput`<sup>Optional</sup> <a name="WorkloadIdentityPoolManagedIdentityIdInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolManagedIdentityIdInput"></a>

```csharp
public string WorkloadIdentityPoolManagedIdentityIdInput { get; }
```

- *Type:* string

---

##### `WorkloadIdentityPoolNamespaceIdInput`<sup>Optional</sup> <a name="WorkloadIdentityPoolNamespaceIdInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolNamespaceIdInput"></a>

```csharp
public string WorkloadIdentityPoolNamespaceIdInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `WorkloadIdentityPoolId`<sup>Required</sup> <a name="WorkloadIdentityPoolId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolId"></a>

```csharp
public string WorkloadIdentityPoolId { get; }
```

- *Type:* string

---

##### `WorkloadIdentityPoolManagedIdentityId`<sup>Required</sup> <a name="WorkloadIdentityPoolManagedIdentityId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolManagedIdentityId"></a>

```csharp
public string WorkloadIdentityPoolManagedIdentityId { get; }
```

- *Type:* string

---

##### `WorkloadIdentityPoolNamespaceId`<sup>Required</sup> <a name="WorkloadIdentityPoolNamespaceId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolNamespaceId"></a>

```csharp
public string WorkloadIdentityPoolNamespaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules <a name="GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules {
    string GoogleCloudResource
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules.property.googleCloudResource">GoogleCloudResource</a></code> | <code>string</code> | A single workload operating on Google Cloud. For example: '//compute.googleapis.com/projects/123/uid/zones/us-central1-a/instances/12345678'. |

---

##### `GoogleCloudResource`<sup>Required</sup> <a name="GoogleCloudResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules.property.googleCloudResource"></a>

```csharp
public string GoogleCloudResource { get; set; }
```

- *Type:* string

A single workload operating on Google Cloud. For example: '//compute.googleapis.com/projects/123/uid/zones/us-central1-a/instances/12345678'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workload_identity_pool_managed_identity#google_cloud_resource GoogleIamWorkloadIdentityPoolManagedIdentity#google_cloud_resource}

---

### GoogleIamWorkloadIdentityPoolManagedIdentityConfig <a name="GoogleIamWorkloadIdentityPoolManagedIdentityConfig" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamWorkloadIdentityPoolManagedIdentityConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string WorkloadIdentityPoolId,
    string WorkloadIdentityPoolManagedIdentityId,
    string WorkloadIdentityPoolNamespaceId,
    object AttestationRules = null,
    string Description = null,
    object Disabled = null,
    string Id = null,
    string Project = null,
    GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.workloadIdentityPoolId">WorkloadIdentityPoolId</a></code> | <code>string</code> | The ID to use for the pool, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.workloadIdentityPoolManagedIdentityId">WorkloadIdentityPoolManagedIdentityId</a></code> | <code>string</code> | The ID to use for the managed identity. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.workloadIdentityPoolNamespaceId">WorkloadIdentityPoolNamespaceId</a></code> | <code>string</code> | The ID to use for the namespace. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.attestationRules">AttestationRules</a></code> | <code>object</code> | attestation_rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.description">Description</a></code> | <code>string</code> | A description of the managed identity. Cannot exceed 256 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.disabled">Disabled</a></code> | <code>object</code> | Whether the managed identity is disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workload_identity_pool_managed_identity#id GoogleIamWorkloadIdentityPoolManagedIdentity#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workload_identity_pool_managed_identity#project GoogleIamWorkloadIdentityPoolManagedIdentity#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts">GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `WorkloadIdentityPoolId`<sup>Required</sup> <a name="WorkloadIdentityPoolId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.workloadIdentityPoolId"></a>

```csharp
public string WorkloadIdentityPoolId { get; set; }
```

- *Type:* string

The ID to use for the pool, which becomes the final component of the resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workload_identity_pool_managed_identity#workload_identity_pool_id GoogleIamWorkloadIdentityPoolManagedIdentity#workload_identity_pool_id}

---

##### `WorkloadIdentityPoolManagedIdentityId`<sup>Required</sup> <a name="WorkloadIdentityPoolManagedIdentityId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.workloadIdentityPoolManagedIdentityId"></a>

```csharp
public string WorkloadIdentityPoolManagedIdentityId { get; set; }
```

- *Type:* string

The ID to use for the managed identity.

This value must:

* contain at most 63 characters
* contain only lowercase alphanumeric characters or '-'
* start with an alphanumeric character
* end with an alphanumeric character

The prefix 'gcp-' will be reserved for future uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workload_identity_pool_managed_identity#workload_identity_pool_managed_identity_id GoogleIamWorkloadIdentityPoolManagedIdentity#workload_identity_pool_managed_identity_id}

---

##### `WorkloadIdentityPoolNamespaceId`<sup>Required</sup> <a name="WorkloadIdentityPoolNamespaceId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.workloadIdentityPoolNamespaceId"></a>

```csharp
public string WorkloadIdentityPoolNamespaceId { get; set; }
```

- *Type:* string

The ID to use for the namespace.

This value must:

* contain at most 63 characters
* contain only lowercase alphanumeric characters or '-'
* start with an alphanumeric character
* end with an alphanumeric character

The prefix 'gcp-' will be reserved for future uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workload_identity_pool_managed_identity#workload_identity_pool_namespace_id GoogleIamWorkloadIdentityPoolManagedIdentity#workload_identity_pool_namespace_id}

---

##### `AttestationRules`<sup>Optional</sup> <a name="AttestationRules" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.attestationRules"></a>

```csharp
public object AttestationRules { get; set; }
```

- *Type:* object

attestation_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workload_identity_pool_managed_identity#attestation_rules GoogleIamWorkloadIdentityPoolManagedIdentity#attestation_rules}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the managed identity. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workload_identity_pool_managed_identity#description GoogleIamWorkloadIdentityPoolManagedIdentity#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

Whether the managed identity is disabled.

If disabled, credentials may no longer be issued for
the identity, however existing credentials will still be accepted until they expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workload_identity_pool_managed_identity#disabled GoogleIamWorkloadIdentityPoolManagedIdentity#disabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workload_identity_pool_managed_identity#id GoogleIamWorkloadIdentityPoolManagedIdentity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workload_identity_pool_managed_identity#project GoogleIamWorkloadIdentityPoolManagedIdentity#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.timeouts"></a>

```csharp
public GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts">GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workload_identity_pool_managed_identity#timeouts GoogleIamWorkloadIdentityPoolManagedIdentity#timeouts}

---

### GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts <a name="GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workload_identity_pool_managed_identity#create GoogleIamWorkloadIdentityPoolManagedIdentity#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workload_identity_pool_managed_identity#delete GoogleIamWorkloadIdentityPoolManagedIdentity#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workload_identity_pool_managed_identity#update GoogleIamWorkloadIdentityPoolManagedIdentity#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workload_identity_pool_managed_identity#create GoogleIamWorkloadIdentityPoolManagedIdentity#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workload_identity_pool_managed_identity#delete GoogleIamWorkloadIdentityPoolManagedIdentity#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workload_identity_pool_managed_identity#update GoogleIamWorkloadIdentityPoolManagedIdentity#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList <a name="GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.get"></a>

```csharp
private GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference <a name="GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.googleCloudResourceInput">GoogleCloudResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.googleCloudResource">GoogleCloudResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GoogleCloudResourceInput`<sup>Optional</sup> <a name="GoogleCloudResourceInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.googleCloudResourceInput"></a>

```csharp
public string GoogleCloudResourceInput { get; }
```

- *Type:* string

---

##### `GoogleCloudResource`<sup>Required</sup> <a name="GoogleCloudResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.googleCloudResource"></a>

```csharp
public string GoogleCloudResource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference <a name="GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



