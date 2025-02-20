# `googleVertexAiFeaturestoreEntitytypeIamMember` Submodule <a name="`googleVertexAiFeaturestoreEntitytypeIamMember` Submodule" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiFeaturestoreEntitytypeIamMember <a name="GoogleVertexAiFeaturestoreEntitytypeIamMember" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member google_vertex_ai_featurestore_entitytype_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleVertexAiFeaturestoreEntitytypeIamMember(Construct Scope, string Id, GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig">GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig">GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.putCondition"></a>

```csharp
private void PutCondition(GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition">GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleVertexAiFeaturestoreEntitytypeIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleVertexAiFeaturestoreEntitytypeIamMember.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleVertexAiFeaturestoreEntitytypeIamMember.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleVertexAiFeaturestoreEntitytypeIamMember.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleVertexAiFeaturestoreEntitytypeIamMember.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleVertexAiFeaturestoreEntitytypeIamMember resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVertexAiFeaturestoreEntitytypeIamMember to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVertexAiFeaturestoreEntitytypeIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiFeaturestoreEntitytypeIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference">GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition">GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.entitytypeInput">EntitytypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.featurestoreInput">FeaturestoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.memberInput">MemberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.entitytype">Entitytype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.featurestore">Featurestore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.member">Member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.condition"></a>

```csharp
public GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference">GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.conditionInput"></a>

```csharp
public GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition">GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition</a>

---

##### `EntitytypeInput`<sup>Optional</sup> <a name="EntitytypeInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.entitytypeInput"></a>

```csharp
public string EntitytypeInput { get; }
```

- *Type:* string

---

##### `FeaturestoreInput`<sup>Optional</sup> <a name="FeaturestoreInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.featurestoreInput"></a>

```csharp
public string FeaturestoreInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.memberInput"></a>

```csharp
public string MemberInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `Entitytype`<sup>Required</sup> <a name="Entitytype" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.entitytype"></a>

```csharp
public string Entitytype { get; }
```

- *Type:* string

---

##### `Featurestore`<sup>Required</sup> <a name="Featurestore" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.featurestore"></a>

```csharp
public string Featurestore { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.member"></a>

```csharp
public string Member { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMember.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition <a name="GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member#expression GoogleVertexAiFeaturestoreEntitytypeIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member#title GoogleVertexAiFeaturestoreEntitytypeIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member#description GoogleVertexAiFeaturestoreEntitytypeIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member#expression GoogleVertexAiFeaturestoreEntitytypeIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member#title GoogleVertexAiFeaturestoreEntitytypeIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member#description GoogleVertexAiFeaturestoreEntitytypeIamMember#description}.

---

### GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig <a name="GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Entitytype,
    string Featurestore,
    string Member,
    string Role,
    GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition Condition = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.entitytype">Entitytype</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member#entitytype GoogleVertexAiFeaturestoreEntitytypeIamMember#entitytype}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.featurestore">Featurestore</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member#featurestore GoogleVertexAiFeaturestoreEntitytypeIamMember#featurestore}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.member">Member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member#member GoogleVertexAiFeaturestoreEntitytypeIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member#role GoogleVertexAiFeaturestoreEntitytypeIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition">GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member#id GoogleVertexAiFeaturestoreEntitytypeIamMember#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Entitytype`<sup>Required</sup> <a name="Entitytype" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.entitytype"></a>

```csharp
public string Entitytype { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member#entitytype GoogleVertexAiFeaturestoreEntitytypeIamMember#entitytype}.

---

##### `Featurestore`<sup>Required</sup> <a name="Featurestore" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.featurestore"></a>

```csharp
public string Featurestore { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member#featurestore GoogleVertexAiFeaturestoreEntitytypeIamMember#featurestore}.

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.member"></a>

```csharp
public string Member { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member#member GoogleVertexAiFeaturestoreEntitytypeIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member#role GoogleVertexAiFeaturestoreEntitytypeIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.condition"></a>

```csharp
public GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition">GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member#condition GoogleVertexAiFeaturestoreEntitytypeIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_featurestore_entitytype_iam_member#id GoogleVertexAiFeaturestoreEntitytypeIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference <a name="GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition">GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreEntitytypeIamMember.GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition">GoogleVertexAiFeaturestoreEntitytypeIamMemberCondition</a>

---



