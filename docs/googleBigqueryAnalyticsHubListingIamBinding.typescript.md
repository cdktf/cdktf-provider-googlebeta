# `googleBigqueryAnalyticsHubListingIamBinding` Submodule <a name="`googleBigqueryAnalyticsHubListingIamBinding` Submodule" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryAnalyticsHubListingIamBinding <a name="GoogleBigqueryAnalyticsHubListingIamBinding" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_listing_iam_binding google_bigquery_analytics_hub_listing_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.Initializer"></a>

```typescript
import { googleBigqueryAnalyticsHubListingIamBinding } from '@cdktf/provider-google-beta'

new googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding(scope: Construct, id: string, config: GoogleBigqueryAnalyticsHubListingIamBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConfig">GoogleBigqueryAnalyticsHubListingIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConfig">GoogleBigqueryAnalyticsHubListingIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.putCondition"></a>

```typescript
public putCondition(value: GoogleBigqueryAnalyticsHubListingIamBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingCondition">GoogleBigqueryAnalyticsHubListingIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBigqueryAnalyticsHubListingIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.isConstruct"></a>

```typescript
import { googleBigqueryAnalyticsHubListingIamBinding } from '@cdktf/provider-google-beta'

googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.isTerraformElement"></a>

```typescript
import { googleBigqueryAnalyticsHubListingIamBinding } from '@cdktf/provider-google-beta'

googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.isTerraformResource"></a>

```typescript
import { googleBigqueryAnalyticsHubListingIamBinding } from '@cdktf/provider-google-beta'

googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.generateConfigForImport"></a>

```typescript
import { googleBigqueryAnalyticsHubListingIamBinding } from '@cdktf/provider-google-beta'

googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleBigqueryAnalyticsHubListingIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBigqueryAnalyticsHubListingIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBigqueryAnalyticsHubListingIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_listing_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryAnalyticsHubListingIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference">GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingCondition">GoogleBigqueryAnalyticsHubListingIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.dataExchangeIdInput">dataExchangeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.listingIdInput">listingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.dataExchangeId">dataExchangeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.listingId">listingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.condition"></a>

```typescript
public readonly condition: GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference">GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: GoogleBigqueryAnalyticsHubListingIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingCondition">GoogleBigqueryAnalyticsHubListingIamBindingCondition</a>

---

##### `dataExchangeIdInput`<sup>Optional</sup> <a name="dataExchangeIdInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.dataExchangeIdInput"></a>

```typescript
public readonly dataExchangeIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `listingIdInput`<sup>Optional</sup> <a name="listingIdInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.listingIdInput"></a>

```typescript
public readonly listingIdInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `dataExchangeId`<sup>Required</sup> <a name="dataExchangeId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.dataExchangeId"></a>

```typescript
public readonly dataExchangeId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.listingId"></a>

```typescript
public readonly listingId: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryAnalyticsHubListingIamBindingCondition <a name="GoogleBigqueryAnalyticsHubListingIamBindingCondition" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingCondition.Initializer"></a>

```typescript
import { googleBigqueryAnalyticsHubListingIamBinding } from '@cdktf/provider-google-beta'

const googleBigqueryAnalyticsHubListingIamBindingCondition: googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_listing_iam_binding#expression GoogleBigqueryAnalyticsHubListingIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_listing_iam_binding#title GoogleBigqueryAnalyticsHubListingIamBinding#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_listing_iam_binding#description GoogleBigqueryAnalyticsHubListingIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_listing_iam_binding#expression GoogleBigqueryAnalyticsHubListingIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_listing_iam_binding#title GoogleBigqueryAnalyticsHubListingIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_listing_iam_binding#description GoogleBigqueryAnalyticsHubListingIamBinding#description}.

---

### GoogleBigqueryAnalyticsHubListingIamBindingConfig <a name="GoogleBigqueryAnalyticsHubListingIamBindingConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConfig.Initializer"></a>

```typescript
import { googleBigqueryAnalyticsHubListingIamBinding } from '@cdktf/provider-google-beta'

const googleBigqueryAnalyticsHubListingIamBindingConfig: googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConfig.property.dataExchangeId">dataExchangeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_listing_iam_binding#data_exchange_id GoogleBigqueryAnalyticsHubListingIamBinding#data_exchange_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConfig.property.listingId">listingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_listing_iam_binding#listing_id GoogleBigqueryAnalyticsHubListingIamBinding#listing_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_listing_iam_binding#members GoogleBigqueryAnalyticsHubListingIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_listing_iam_binding#role GoogleBigqueryAnalyticsHubListingIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingCondition">GoogleBigqueryAnalyticsHubListingIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_listing_iam_binding#id GoogleBigqueryAnalyticsHubListingIamBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_listing_iam_binding#location GoogleBigqueryAnalyticsHubListingIamBinding#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_listing_iam_binding#project GoogleBigqueryAnalyticsHubListingIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataExchangeId`<sup>Required</sup> <a name="dataExchangeId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConfig.property.dataExchangeId"></a>

```typescript
public readonly dataExchangeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_listing_iam_binding#data_exchange_id GoogleBigqueryAnalyticsHubListingIamBinding#data_exchange_id}.

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConfig.property.listingId"></a>

```typescript
public readonly listingId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_listing_iam_binding#listing_id GoogleBigqueryAnalyticsHubListingIamBinding#listing_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_listing_iam_binding#members GoogleBigqueryAnalyticsHubListingIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_listing_iam_binding#role GoogleBigqueryAnalyticsHubListingIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConfig.property.condition"></a>

```typescript
public readonly condition: GoogleBigqueryAnalyticsHubListingIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingCondition">GoogleBigqueryAnalyticsHubListingIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_listing_iam_binding#condition GoogleBigqueryAnalyticsHubListingIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_listing_iam_binding#id GoogleBigqueryAnalyticsHubListingIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_listing_iam_binding#location GoogleBigqueryAnalyticsHubListingIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_listing_iam_binding#project GoogleBigqueryAnalyticsHubListingIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference <a name="GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.Initializer"></a>

```typescript
import { googleBigqueryAnalyticsHubListingIamBinding } from '@cdktf/provider-google-beta'

new googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingCondition">GoogleBigqueryAnalyticsHubListingIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryAnalyticsHubListingIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubListingIamBinding.GoogleBigqueryAnalyticsHubListingIamBindingCondition">GoogleBigqueryAnalyticsHubListingIamBindingCondition</a>

---



