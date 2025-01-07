# `googleClouddeployDeliveryPipelineIamMember` Submodule <a name="`googleClouddeployDeliveryPipelineIamMember` Submodule" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleClouddeployDeliveryPipelineIamMember <a name="GoogleClouddeployDeliveryPipelineIamMember" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_member google_clouddeploy_delivery_pipeline_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployDeliveryPipelineIamMember(Construct Scope, string Id, GoogleClouddeployDeliveryPipelineIamMemberConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConfig">GoogleClouddeployDeliveryPipelineIamMemberConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConfig">GoogleClouddeployDeliveryPipelineIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.putCondition"></a>

```csharp
private void PutCondition(GoogleClouddeployDeliveryPipelineIamMemberCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberCondition">GoogleClouddeployDeliveryPipelineIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleClouddeployDeliveryPipelineIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleClouddeployDeliveryPipelineIamMember.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleClouddeployDeliveryPipelineIamMember.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleClouddeployDeliveryPipelineIamMember.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleClouddeployDeliveryPipelineIamMember.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleClouddeployDeliveryPipelineIamMember resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleClouddeployDeliveryPipelineIamMember to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleClouddeployDeliveryPipelineIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleClouddeployDeliveryPipelineIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference">GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberCondition">GoogleClouddeployDeliveryPipelineIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.memberInput">MemberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.member">Member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.condition"></a>

```csharp
public GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference">GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.conditionInput"></a>

```csharp
public GoogleClouddeployDeliveryPipelineIamMemberCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberCondition">GoogleClouddeployDeliveryPipelineIamMemberCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.memberInput"></a>

```csharp
public string MemberInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.member"></a>

```csharp
public string Member { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMember.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleClouddeployDeliveryPipelineIamMemberCondition <a name="GoogleClouddeployDeliveryPipelineIamMemberCondition" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployDeliveryPipelineIamMemberCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_member#expression GoogleClouddeployDeliveryPipelineIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_member#title GoogleClouddeployDeliveryPipelineIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_member#description GoogleClouddeployDeliveryPipelineIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_member#expression GoogleClouddeployDeliveryPipelineIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_member#title GoogleClouddeployDeliveryPipelineIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_member#description GoogleClouddeployDeliveryPipelineIamMember#description}.

---

### GoogleClouddeployDeliveryPipelineIamMemberConfig <a name="GoogleClouddeployDeliveryPipelineIamMemberConfig" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployDeliveryPipelineIamMemberConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Member,
    string Name,
    string Role,
    GoogleClouddeployDeliveryPipelineIamMemberCondition Condition = null,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConfig.property.member">Member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_member#member GoogleClouddeployDeliveryPipelineIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_member#name GoogleClouddeployDeliveryPipelineIamMember#name}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_member#role GoogleClouddeployDeliveryPipelineIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberCondition">GoogleClouddeployDeliveryPipelineIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_member#id GoogleClouddeployDeliveryPipelineIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_member#location GoogleClouddeployDeliveryPipelineIamMember#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_member#project GoogleClouddeployDeliveryPipelineIamMember#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConfig.property.member"></a>

```csharp
public string Member { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_member#member GoogleClouddeployDeliveryPipelineIamMember#member}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_member#name GoogleClouddeployDeliveryPipelineIamMember#name}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_member#role GoogleClouddeployDeliveryPipelineIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConfig.property.condition"></a>

```csharp
public GoogleClouddeployDeliveryPipelineIamMemberCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberCondition">GoogleClouddeployDeliveryPipelineIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_member#condition GoogleClouddeployDeliveryPipelineIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_member#id GoogleClouddeployDeliveryPipelineIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_member#location GoogleClouddeployDeliveryPipelineIamMember#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline_iam_member#project GoogleClouddeployDeliveryPipelineIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference <a name="GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberCondition">GoogleClouddeployDeliveryPipelineIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleClouddeployDeliveryPipelineIamMemberCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipelineIamMember.GoogleClouddeployDeliveryPipelineIamMemberCondition">GoogleClouddeployDeliveryPipelineIamMemberCondition</a>

---



