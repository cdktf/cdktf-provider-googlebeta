# `googleCloudIdentityGroupMembership` Submodule <a name="`googleCloudIdentityGroupMembership` Submodule" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudIdentityGroupMembership <a name="GoogleCloudIdentityGroupMembership" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_identity_group_membership google_cloud_identity_group_membership}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudIdentityGroupMembership(Construct Scope, string Id, GoogleCloudIdentityGroupMembershipConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig">GoogleCloudIdentityGroupMembershipConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig">GoogleCloudIdentityGroupMembershipConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.putMemberKey">PutMemberKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.putPreferredMemberKey">PutPreferredMemberKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.putRoles">PutRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.resetMemberKey">ResetMemberKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.resetPreferredMemberKey">ResetPreferredMemberKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMemberKey` <a name="PutMemberKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.putMemberKey"></a>

```csharp
private void PutMemberKey(GoogleCloudIdentityGroupMembershipMemberKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.putMemberKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey">GoogleCloudIdentityGroupMembershipMemberKey</a>

---

##### `PutPreferredMemberKey` <a name="PutPreferredMemberKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.putPreferredMemberKey"></a>

```csharp
private void PutPreferredMemberKey(GoogleCloudIdentityGroupMembershipPreferredMemberKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.putPreferredMemberKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey">GoogleCloudIdentityGroupMembershipPreferredMemberKey</a>

---

##### `PutRoles` <a name="PutRoles" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.putRoles"></a>

```csharp
private void PutRoles(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.putRoles.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleCloudIdentityGroupMembershipTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts">GoogleCloudIdentityGroupMembershipTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMemberKey` <a name="ResetMemberKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.resetMemberKey"></a>

```csharp
private void ResetMemberKey()
```

##### `ResetPreferredMemberKey` <a name="ResetPreferredMemberKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.resetPreferredMemberKey"></a>

```csharp
private void ResetPreferredMemberKey()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCloudIdentityGroupMembership resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleCloudIdentityGroupMembership.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleCloudIdentityGroupMembership.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleCloudIdentityGroupMembership.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleCloudIdentityGroupMembership.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleCloudIdentityGroupMembership resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCloudIdentityGroupMembership to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCloudIdentityGroupMembership that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_identity_group_membership#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudIdentityGroupMembership to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.memberKey">MemberKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference">GoogleCloudIdentityGroupMembershipMemberKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.preferredMemberKey">PreferredMemberKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference">GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.roles">Roles</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList">GoogleCloudIdentityGroupMembershipRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference">GoogleCloudIdentityGroupMembershipTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.groupInput">GroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.memberKeyInput">MemberKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey">GoogleCloudIdentityGroupMembershipMemberKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.preferredMemberKeyInput">PreferredMemberKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey">GoogleCloudIdentityGroupMembershipPreferredMemberKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.rolesInput">RolesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.group">Group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `MemberKey`<sup>Required</sup> <a name="MemberKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.memberKey"></a>

```csharp
public GoogleCloudIdentityGroupMembershipMemberKeyOutputReference MemberKey { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference">GoogleCloudIdentityGroupMembershipMemberKeyOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PreferredMemberKey`<sup>Required</sup> <a name="PreferredMemberKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.preferredMemberKey"></a>

```csharp
public GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference PreferredMemberKey { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference">GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference</a>

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.roles"></a>

```csharp
public GoogleCloudIdentityGroupMembershipRolesList Roles { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList">GoogleCloudIdentityGroupMembershipRolesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.timeouts"></a>

```csharp
public GoogleCloudIdentityGroupMembershipTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference">GoogleCloudIdentityGroupMembershipTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.groupInput"></a>

```csharp
public string GroupInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MemberKeyInput`<sup>Optional</sup> <a name="MemberKeyInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.memberKeyInput"></a>

```csharp
public GoogleCloudIdentityGroupMembershipMemberKey MemberKeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey">GoogleCloudIdentityGroupMembershipMemberKey</a>

---

##### `PreferredMemberKeyInput`<sup>Optional</sup> <a name="PreferredMemberKeyInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.preferredMemberKeyInput"></a>

```csharp
public GoogleCloudIdentityGroupMembershipPreferredMemberKey PreferredMemberKeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey">GoogleCloudIdentityGroupMembershipPreferredMemberKey</a>

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.rolesInput"></a>

```csharp
public object RolesInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.group"></a>

```csharp
public string Group { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudIdentityGroupMembershipConfig <a name="GoogleCloudIdentityGroupMembershipConfig" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudIdentityGroupMembershipConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Group,
    object Roles,
    string Id = null,
    GoogleCloudIdentityGroupMembershipMemberKey MemberKey = null,
    GoogleCloudIdentityGroupMembershipPreferredMemberKey PreferredMemberKey = null,
    GoogleCloudIdentityGroupMembershipTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.group">Group</a></code> | <code>string</code> | The name of the Group to create this membership in. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.roles">Roles</a></code> | <code>object</code> | roles block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_identity_group_membership#id GoogleCloudIdentityGroupMembership#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.memberKey">MemberKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey">GoogleCloudIdentityGroupMembershipMemberKey</a></code> | member_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.preferredMemberKey">PreferredMemberKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey">GoogleCloudIdentityGroupMembershipPreferredMemberKey</a></code> | preferred_member_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts">GoogleCloudIdentityGroupMembershipTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.group"></a>

```csharp
public string Group { get; set; }
```

- *Type:* string

The name of the Group to create this membership in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_identity_group_membership#group GoogleCloudIdentityGroupMembership#group}

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.roles"></a>

```csharp
public object Roles { get; set; }
```

- *Type:* object

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_identity_group_membership#roles GoogleCloudIdentityGroupMembership#roles}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_identity_group_membership#id GoogleCloudIdentityGroupMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MemberKey`<sup>Optional</sup> <a name="MemberKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.memberKey"></a>

```csharp
public GoogleCloudIdentityGroupMembershipMemberKey MemberKey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey">GoogleCloudIdentityGroupMembershipMemberKey</a>

member_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_identity_group_membership#member_key GoogleCloudIdentityGroupMembership#member_key}

---

##### `PreferredMemberKey`<sup>Optional</sup> <a name="PreferredMemberKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.preferredMemberKey"></a>

```csharp
public GoogleCloudIdentityGroupMembershipPreferredMemberKey PreferredMemberKey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey">GoogleCloudIdentityGroupMembershipPreferredMemberKey</a>

preferred_member_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_identity_group_membership#preferred_member_key GoogleCloudIdentityGroupMembership#preferred_member_key}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.timeouts"></a>

```csharp
public GoogleCloudIdentityGroupMembershipTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts">GoogleCloudIdentityGroupMembershipTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_identity_group_membership#timeouts GoogleCloudIdentityGroupMembership#timeouts}

---

### GoogleCloudIdentityGroupMembershipMemberKey <a name="GoogleCloudIdentityGroupMembershipMemberKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudIdentityGroupMembershipMemberKey {
    string Id,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey.property.id">Id</a></code> | <code>string</code> | The ID of the entity. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey.property.namespace">Namespace</a></code> | <code>string</code> | The namespace in which the entity exists. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The ID of the entity.

For Google-managed entities, the id must be the email address of an existing
group or user.

For external-identity-mapped entities, the id must be a string conforming
to the Identity Source's requirements.

Must be unique within a namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_identity_group_membership#id GoogleCloudIdentityGroupMembership#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The namespace in which the entity exists.

If not specified, the EntityKey represents a Google-managed entity
such as a Google user or a Google Group.

If specified, the EntityKey represents an external-identity-mapped group.
The namespace must correspond to an identity source created in Admin Console
and must be in the form of 'identitysources/{identity_source_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_identity_group_membership#namespace GoogleCloudIdentityGroupMembership#namespace}

---

### GoogleCloudIdentityGroupMembershipPreferredMemberKey <a name="GoogleCloudIdentityGroupMembershipPreferredMemberKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudIdentityGroupMembershipPreferredMemberKey {
    string Id,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey.property.id">Id</a></code> | <code>string</code> | The ID of the entity. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey.property.namespace">Namespace</a></code> | <code>string</code> | The namespace in which the entity exists. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The ID of the entity.

For Google-managed entities, the id must be the email address of an existing
group or user.

For external-identity-mapped entities, the id must be a string conforming
to the Identity Source's requirements.

Must be unique within a namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_identity_group_membership#id GoogleCloudIdentityGroupMembership#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The namespace in which the entity exists.

If not specified, the EntityKey represents a Google-managed entity
such as a Google user or a Google Group.

If specified, the EntityKey represents an external-identity-mapped group.
The namespace must correspond to an identity source created in Admin Console
and must be in the form of 'identitysources/{identity_source_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_identity_group_membership#namespace GoogleCloudIdentityGroupMembership#namespace}

---

### GoogleCloudIdentityGroupMembershipRoles <a name="GoogleCloudIdentityGroupMembershipRoles" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRoles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudIdentityGroupMembershipRoles {
    string Name,
    GoogleCloudIdentityGroupMembershipRolesExpiryDetail ExpiryDetail = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRoles.property.name">Name</a></code> | <code>string</code> | The name of the MembershipRole. Must be one of OWNER, MANAGER, MEMBER. Possible values: ["OWNER", "MANAGER", "MEMBER"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRoles.property.expiryDetail">ExpiryDetail</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetail">GoogleCloudIdentityGroupMembershipRolesExpiryDetail</a></code> | expiry_detail block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRoles.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the MembershipRole. Must be one of OWNER, MANAGER, MEMBER. Possible values: ["OWNER", "MANAGER", "MEMBER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_identity_group_membership#name GoogleCloudIdentityGroupMembership#name}

---

##### `ExpiryDetail`<sup>Optional</sup> <a name="ExpiryDetail" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRoles.property.expiryDetail"></a>

```csharp
public GoogleCloudIdentityGroupMembershipRolesExpiryDetail ExpiryDetail { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetail">GoogleCloudIdentityGroupMembershipRolesExpiryDetail</a>

expiry_detail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_identity_group_membership#expiry_detail GoogleCloudIdentityGroupMembership#expiry_detail}

---

### GoogleCloudIdentityGroupMembershipRolesExpiryDetail <a name="GoogleCloudIdentityGroupMembershipRolesExpiryDetail" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetail.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudIdentityGroupMembershipRolesExpiryDetail {
    string ExpireTime
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetail.property.expireTime">ExpireTime</a></code> | <code>string</code> | The time at which the MembershipRole will expire. |

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetail.property.expireTime"></a>

```csharp
public string ExpireTime { get; set; }
```

- *Type:* string

The time at which the MembershipRole will expire.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
resolution and up to nine fractional digits.

Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_identity_group_membership#expire_time GoogleCloudIdentityGroupMembership#expire_time}

---

### GoogleCloudIdentityGroupMembershipTimeouts <a name="GoogleCloudIdentityGroupMembershipTimeouts" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudIdentityGroupMembershipTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_identity_group_membership#create GoogleCloudIdentityGroupMembership#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_identity_group_membership#delete GoogleCloudIdentityGroupMembership#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_identity_group_membership#update GoogleCloudIdentityGroupMembership#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_identity_group_membership#create GoogleCloudIdentityGroupMembership#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_identity_group_membership#delete GoogleCloudIdentityGroupMembership#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_identity_group_membership#update GoogleCloudIdentityGroupMembership#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudIdentityGroupMembershipMemberKeyOutputReference <a name="GoogleCloudIdentityGroupMembershipMemberKeyOutputReference" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudIdentityGroupMembershipMemberKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey">GoogleCloudIdentityGroupMembershipMemberKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudIdentityGroupMembershipMemberKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey">GoogleCloudIdentityGroupMembershipMemberKey</a>

---


### GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference <a name="GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey">GoogleCloudIdentityGroupMembershipPreferredMemberKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudIdentityGroupMembershipPreferredMemberKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey">GoogleCloudIdentityGroupMembershipPreferredMemberKey</a>

---


### GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference <a name="GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.expireTimeInput">ExpireTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.expireTime">ExpireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetail">GoogleCloudIdentityGroupMembershipRolesExpiryDetail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpireTimeInput`<sup>Optional</sup> <a name="ExpireTimeInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.expireTimeInput"></a>

```csharp
public string ExpireTimeInput { get; }
```

- *Type:* string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.expireTime"></a>

```csharp
public string ExpireTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudIdentityGroupMembershipRolesExpiryDetail InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetail">GoogleCloudIdentityGroupMembershipRolesExpiryDetail</a>

---


### GoogleCloudIdentityGroupMembershipRolesList <a name="GoogleCloudIdentityGroupMembershipRolesList" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudIdentityGroupMembershipRolesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.get"></a>

```csharp
private GoogleCloudIdentityGroupMembershipRolesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleCloudIdentityGroupMembershipRolesOutputReference <a name="GoogleCloudIdentityGroupMembershipRolesOutputReference" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudIdentityGroupMembershipRolesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.putExpiryDetail">PutExpiryDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.resetExpiryDetail">ResetExpiryDetail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExpiryDetail` <a name="PutExpiryDetail" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.putExpiryDetail"></a>

```csharp
private void PutExpiryDetail(GoogleCloudIdentityGroupMembershipRolesExpiryDetail Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.putExpiryDetail.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetail">GoogleCloudIdentityGroupMembershipRolesExpiryDetail</a>

---

##### `ResetExpiryDetail` <a name="ResetExpiryDetail" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.resetExpiryDetail"></a>

```csharp
private void ResetExpiryDetail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.expiryDetail">ExpiryDetail</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference">GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.expiryDetailInput">ExpiryDetailInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetail">GoogleCloudIdentityGroupMembershipRolesExpiryDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpiryDetail`<sup>Required</sup> <a name="ExpiryDetail" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.expiryDetail"></a>

```csharp
public GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference ExpiryDetail { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference">GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference</a>

---

##### `ExpiryDetailInput`<sup>Optional</sup> <a name="ExpiryDetailInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.expiryDetailInput"></a>

```csharp
public GoogleCloudIdentityGroupMembershipRolesExpiryDetail ExpiryDetailInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetail">GoogleCloudIdentityGroupMembershipRolesExpiryDetail</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleCloudIdentityGroupMembershipTimeoutsOutputReference <a name="GoogleCloudIdentityGroupMembershipTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudIdentityGroupMembershipTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



