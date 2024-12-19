# `googleBigqueryAnalyticsHubListingIamMember` Submodule <a name="`googleBigqueryAnalyticsHubListingIamMember` Submodule" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryAnalyticsHubListingIamMember <a name="GoogleBigqueryAnalyticsHubListingIamMember" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_analytics_hub_listing_iam_member google_bigquery_analytics_hub_listing_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubListingIamMember(Construct Scope, string Id, GoogleBigqueryAnalyticsHubListingIamMemberConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConfig">GoogleBigqueryAnalyticsHubListingIamMemberConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConfig">GoogleBigqueryAnalyticsHubListingIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.putCondition"></a>

```csharp
private void PutCondition(GoogleBigqueryAnalyticsHubListingIamMemberCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberCondition">GoogleBigqueryAnalyticsHubListingIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBigqueryAnalyticsHubListingIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigqueryAnalyticsHubListingIamMember.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigqueryAnalyticsHubListingIamMember.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigqueryAnalyticsHubListingIamMember.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigqueryAnalyticsHubListingIamMember.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleBigqueryAnalyticsHubListingIamMember resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBigqueryAnalyticsHubListingIamMember to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBigqueryAnalyticsHubListingIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_analytics_hub_listing_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryAnalyticsHubListingIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference">GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberCondition">GoogleBigqueryAnalyticsHubListingIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.dataExchangeIdInput">DataExchangeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.listingIdInput">ListingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.memberInput">MemberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.dataExchangeId">DataExchangeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.listingId">ListingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.member">Member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.condition"></a>

```csharp
public GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference">GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.conditionInput"></a>

```csharp
public GoogleBigqueryAnalyticsHubListingIamMemberCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberCondition">GoogleBigqueryAnalyticsHubListingIamMemberCondition</a>

---

##### `DataExchangeIdInput`<sup>Optional</sup> <a name="DataExchangeIdInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.dataExchangeIdInput"></a>

```csharp
public string DataExchangeIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ListingIdInput`<sup>Optional</sup> <a name="ListingIdInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.listingIdInput"></a>

```csharp
public string ListingIdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.memberInput"></a>

```csharp
public string MemberInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `DataExchangeId`<sup>Required</sup> <a name="DataExchangeId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.dataExchangeId"></a>

```csharp
public string DataExchangeId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.listingId"></a>

```csharp
public string ListingId { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.member"></a>

```csharp
public string Member { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMember.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryAnalyticsHubListingIamMemberCondition <a name="GoogleBigqueryAnalyticsHubListingIamMemberCondition" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubListingIamMemberCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_analytics_hub_listing_iam_member#expression GoogleBigqueryAnalyticsHubListingIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_analytics_hub_listing_iam_member#title GoogleBigqueryAnalyticsHubListingIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_analytics_hub_listing_iam_member#description GoogleBigqueryAnalyticsHubListingIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_analytics_hub_listing_iam_member#expression GoogleBigqueryAnalyticsHubListingIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_analytics_hub_listing_iam_member#title GoogleBigqueryAnalyticsHubListingIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_analytics_hub_listing_iam_member#description GoogleBigqueryAnalyticsHubListingIamMember#description}.

---

### GoogleBigqueryAnalyticsHubListingIamMemberConfig <a name="GoogleBigqueryAnalyticsHubListingIamMemberConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubListingIamMemberConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DataExchangeId,
    string ListingId,
    string Member,
    string Role,
    GoogleBigqueryAnalyticsHubListingIamMemberCondition Condition = null,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConfig.property.dataExchangeId">DataExchangeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_analytics_hub_listing_iam_member#data_exchange_id GoogleBigqueryAnalyticsHubListingIamMember#data_exchange_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConfig.property.listingId">ListingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_analytics_hub_listing_iam_member#listing_id GoogleBigqueryAnalyticsHubListingIamMember#listing_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConfig.property.member">Member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_analytics_hub_listing_iam_member#member GoogleBigqueryAnalyticsHubListingIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_analytics_hub_listing_iam_member#role GoogleBigqueryAnalyticsHubListingIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberCondition">GoogleBigqueryAnalyticsHubListingIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_analytics_hub_listing_iam_member#id GoogleBigqueryAnalyticsHubListingIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_analytics_hub_listing_iam_member#location GoogleBigqueryAnalyticsHubListingIamMember#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_analytics_hub_listing_iam_member#project GoogleBigqueryAnalyticsHubListingIamMember#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DataExchangeId`<sup>Required</sup> <a name="DataExchangeId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConfig.property.dataExchangeId"></a>

```csharp
public string DataExchangeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_analytics_hub_listing_iam_member#data_exchange_id GoogleBigqueryAnalyticsHubListingIamMember#data_exchange_id}.

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConfig.property.listingId"></a>

```csharp
public string ListingId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_analytics_hub_listing_iam_member#listing_id GoogleBigqueryAnalyticsHubListingIamMember#listing_id}.

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConfig.property.member"></a>

```csharp
public string Member { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_analytics_hub_listing_iam_member#member GoogleBigqueryAnalyticsHubListingIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_analytics_hub_listing_iam_member#role GoogleBigqueryAnalyticsHubListingIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConfig.property.condition"></a>

```csharp
public GoogleBigqueryAnalyticsHubListingIamMemberCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberCondition">GoogleBigqueryAnalyticsHubListingIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_analytics_hub_listing_iam_member#condition GoogleBigqueryAnalyticsHubListingIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_analytics_hub_listing_iam_member#id GoogleBigqueryAnalyticsHubListingIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_analytics_hub_listing_iam_member#location GoogleBigqueryAnalyticsHubListingIamMember#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_analytics_hub_listing_iam_member#project GoogleBigqueryAnalyticsHubListingIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference <a name="GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberCondition">GoogleBigqueryAnalyticsHubListingIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryAnalyticsHubListingIamMemberCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamMember.GoogleBigqueryAnalyticsHubListingIamMemberCondition">GoogleBigqueryAnalyticsHubListingIamMemberCondition</a>

---



