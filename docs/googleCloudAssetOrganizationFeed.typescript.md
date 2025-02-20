# `googleCloudAssetOrganizationFeed` Submodule <a name="`googleCloudAssetOrganizationFeed` Submodule" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudAssetOrganizationFeed <a name="GoogleCloudAssetOrganizationFeed" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_asset_organization_feed google_cloud_asset_organization_feed}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer"></a>

```typescript
import { googleCloudAssetOrganizationFeed } from '@cdktf/provider-google-beta'

new googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed(scope: Construct, id: string, config: GoogleCloudAssetOrganizationFeedConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig">GoogleCloudAssetOrganizationFeedConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig">GoogleCloudAssetOrganizationFeedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.putFeedOutputConfig">putFeedOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetAssetNames">resetAssetNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetAssetTypes">resetAssetTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.putCondition"></a>

```typescript
public putCondition(value: GoogleCloudAssetOrganizationFeedCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition">GoogleCloudAssetOrganizationFeedCondition</a>

---

##### `putFeedOutputConfig` <a name="putFeedOutputConfig" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.putFeedOutputConfig"></a>

```typescript
public putFeedOutputConfig(value: GoogleCloudAssetOrganizationFeedFeedOutputConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.putFeedOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig">GoogleCloudAssetOrganizationFeedFeedOutputConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleCloudAssetOrganizationFeedTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts">GoogleCloudAssetOrganizationFeedTimeouts</a>

---

##### `resetAssetNames` <a name="resetAssetNames" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetAssetNames"></a>

```typescript
public resetAssetNames(): void
```

##### `resetAssetTypes` <a name="resetAssetTypes" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetAssetTypes"></a>

```typescript
public resetAssetTypes(): void
```

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetContentType"></a>

```typescript
public resetContentType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCloudAssetOrganizationFeed resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.isConstruct"></a>

```typescript
import { googleCloudAssetOrganizationFeed } from '@cdktf/provider-google-beta'

googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.isTerraformElement"></a>

```typescript
import { googleCloudAssetOrganizationFeed } from '@cdktf/provider-google-beta'

googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.isTerraformResource"></a>

```typescript
import { googleCloudAssetOrganizationFeed } from '@cdktf/provider-google-beta'

googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.generateConfigForImport"></a>

```typescript
import { googleCloudAssetOrganizationFeed } from '@cdktf/provider-google-beta'

googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleCloudAssetOrganizationFeed resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCloudAssetOrganizationFeed to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCloudAssetOrganizationFeed that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_asset_organization_feed#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudAssetOrganizationFeed to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference">GoogleCloudAssetOrganizationFeedConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.feedOutputConfig">feedOutputConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference">GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference">GoogleCloudAssetOrganizationFeedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.assetNamesInput">assetNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.assetTypesInput">assetTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.billingProjectInput">billingProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition">GoogleCloudAssetOrganizationFeedCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.feedIdInput">feedIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.feedOutputConfigInput">feedOutputConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig">GoogleCloudAssetOrganizationFeedFeedOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts">GoogleCloudAssetOrganizationFeedTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.assetNames">assetNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.assetTypes">assetTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.billingProject">billingProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.feedId">feedId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.condition"></a>

```typescript
public readonly condition: GoogleCloudAssetOrganizationFeedConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference">GoogleCloudAssetOrganizationFeedConditionOutputReference</a>

---

##### `feedOutputConfig`<sup>Required</sup> <a name="feedOutputConfig" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.feedOutputConfig"></a>

```typescript
public readonly feedOutputConfig: GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference">GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCloudAssetOrganizationFeedTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference">GoogleCloudAssetOrganizationFeedTimeoutsOutputReference</a>

---

##### `assetNamesInput`<sup>Optional</sup> <a name="assetNamesInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.assetNamesInput"></a>

```typescript
public readonly assetNamesInput: string[];
```

- *Type:* string[]

---

##### `assetTypesInput`<sup>Optional</sup> <a name="assetTypesInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.assetTypesInput"></a>

```typescript
public readonly assetTypesInput: string[];
```

- *Type:* string[]

---

##### `billingProjectInput`<sup>Optional</sup> <a name="billingProjectInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.billingProjectInput"></a>

```typescript
public readonly billingProjectInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.conditionInput"></a>

```typescript
public readonly conditionInput: GoogleCloudAssetOrganizationFeedCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition">GoogleCloudAssetOrganizationFeedCondition</a>

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `feedIdInput`<sup>Optional</sup> <a name="feedIdInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.feedIdInput"></a>

```typescript
public readonly feedIdInput: string;
```

- *Type:* string

---

##### `feedOutputConfigInput`<sup>Optional</sup> <a name="feedOutputConfigInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.feedOutputConfigInput"></a>

```typescript
public readonly feedOutputConfigInput: GoogleCloudAssetOrganizationFeedFeedOutputConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig">GoogleCloudAssetOrganizationFeedFeedOutputConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleCloudAssetOrganizationFeedTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts">GoogleCloudAssetOrganizationFeedTimeouts</a>

---

##### `assetNames`<sup>Required</sup> <a name="assetNames" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.assetNames"></a>

```typescript
public readonly assetNames: string[];
```

- *Type:* string[]

---

##### `assetTypes`<sup>Required</sup> <a name="assetTypes" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.assetTypes"></a>

```typescript
public readonly assetTypes: string[];
```

- *Type:* string[]

---

##### `billingProject`<sup>Required</sup> <a name="billingProject" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.billingProject"></a>

```typescript
public readonly billingProject: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `feedId`<sup>Required</sup> <a name="feedId" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.feedId"></a>

```typescript
public readonly feedId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeed.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudAssetOrganizationFeedCondition <a name="GoogleCloudAssetOrganizationFeedCondition" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition.Initializer"></a>

```typescript
import { googleCloudAssetOrganizationFeed } from '@cdktf/provider-google-beta'

const googleCloudAssetOrganizationFeedCondition: googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition.property.expression">expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition.property.description">description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition.property.location">location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition.property.title">title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_asset_organization_feed#expression GoogleCloudAssetOrganizationFeed#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_asset_organization_feed#description GoogleCloudAssetOrganizationFeed#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_asset_organization_feed#location GoogleCloudAssetOrganizationFeed#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_asset_organization_feed#title GoogleCloudAssetOrganizationFeed#title}

---

### GoogleCloudAssetOrganizationFeedConfig <a name="GoogleCloudAssetOrganizationFeedConfig" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.Initializer"></a>

```typescript
import { googleCloudAssetOrganizationFeed } from '@cdktf/provider-google-beta'

const googleCloudAssetOrganizationFeedConfig: googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.billingProject">billingProject</a></code> | <code>string</code> | The project whose identity will be used when sending messages to the destination pubsub topic. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.feedId">feedId</a></code> | <code>string</code> | This is the client-assigned asset feed identifier and it needs to be unique under a specific parent. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.feedOutputConfig">feedOutputConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig">GoogleCloudAssetOrganizationFeedFeedOutputConfig</a></code> | feed_output_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.orgId">orgId</a></code> | <code>string</code> | The organization this feed should be created in. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.assetNames">assetNames</a></code> | <code>string[]</code> | A list of the full names of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.assetTypes">assetTypes</a></code> | <code>string[]</code> | A list of types of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition">GoogleCloudAssetOrganizationFeedCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.contentType">contentType</a></code> | <code>string</code> | Asset content type. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_asset_organization_feed#id GoogleCloudAssetOrganizationFeed#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts">GoogleCloudAssetOrganizationFeedTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `billingProject`<sup>Required</sup> <a name="billingProject" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.billingProject"></a>

```typescript
public readonly billingProject: string;
```

- *Type:* string

The project whose identity will be used when sending messages to the destination pubsub topic.

It also specifies the project for API
enablement check, quota, and billing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_asset_organization_feed#billing_project GoogleCloudAssetOrganizationFeed#billing_project}

---

##### `feedId`<sup>Required</sup> <a name="feedId" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.feedId"></a>

```typescript
public readonly feedId: string;
```

- *Type:* string

This is the client-assigned asset feed identifier and it needs to be unique under a specific parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_asset_organization_feed#feed_id GoogleCloudAssetOrganizationFeed#feed_id}

---

##### `feedOutputConfig`<sup>Required</sup> <a name="feedOutputConfig" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.feedOutputConfig"></a>

```typescript
public readonly feedOutputConfig: GoogleCloudAssetOrganizationFeedFeedOutputConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig">GoogleCloudAssetOrganizationFeedFeedOutputConfig</a>

feed_output_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_asset_organization_feed#feed_output_config GoogleCloudAssetOrganizationFeed#feed_output_config}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

The organization this feed should be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_asset_organization_feed#org_id GoogleCloudAssetOrganizationFeed#org_id}

---

##### `assetNames`<sup>Optional</sup> <a name="assetNames" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.assetNames"></a>

```typescript
public readonly assetNames: string[];
```

- *Type:* string[]

A list of the full names of the assets to receive updates.

You must specify either or both of
assetNames and assetTypes. Only asset updates matching specified assetNames and assetTypes are
exported to the feed. For example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1.
See https://cloud.google.com/apis/design/resourceNames#fullResourceName for more info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_asset_organization_feed#asset_names GoogleCloudAssetOrganizationFeed#asset_names}

---

##### `assetTypes`<sup>Optional</sup> <a name="assetTypes" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.assetTypes"></a>

```typescript
public readonly assetTypes: string[];
```

- *Type:* string[]

A list of types of the assets to receive updates.

You must specify either or both of assetNames
and assetTypes. Only asset updates matching specified assetNames and assetTypes are exported to
the feed. For example: "compute.googleapis.com/Disk"
See https://cloud.google.com/asset-inventory/docs/supported-asset-types for a list of all
supported asset types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_asset_organization_feed#asset_types GoogleCloudAssetOrganizationFeed#asset_types}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.condition"></a>

```typescript
public readonly condition: GoogleCloudAssetOrganizationFeedCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition">GoogleCloudAssetOrganizationFeedCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_asset_organization_feed#condition GoogleCloudAssetOrganizationFeed#condition}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Asset content type.

If not specified, no content but the asset name and type will be returned. Possible values: ["CONTENT_TYPE_UNSPECIFIED", "RESOURCE", "IAM_POLICY", "ORG_POLICY", "OS_INVENTORY", "ACCESS_POLICY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_asset_organization_feed#content_type GoogleCloudAssetOrganizationFeed#content_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_asset_organization_feed#id GoogleCloudAssetOrganizationFeed#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCloudAssetOrganizationFeedTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts">GoogleCloudAssetOrganizationFeedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_asset_organization_feed#timeouts GoogleCloudAssetOrganizationFeed#timeouts}

---

### GoogleCloudAssetOrganizationFeedFeedOutputConfig <a name="GoogleCloudAssetOrganizationFeedFeedOutputConfig" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig.Initializer"></a>

```typescript
import { googleCloudAssetOrganizationFeed } from '@cdktf/provider-google-beta'

const googleCloudAssetOrganizationFeedFeedOutputConfig: googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig.property.pubsubDestination">pubsubDestination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a></code> | pubsub_destination block. |

---

##### `pubsubDestination`<sup>Required</sup> <a name="pubsubDestination" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig.property.pubsubDestination"></a>

```typescript
public readonly pubsubDestination: GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a>

pubsub_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_asset_organization_feed#pubsub_destination GoogleCloudAssetOrganizationFeed#pubsub_destination}

---

### GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination <a name="GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination.Initializer"></a>

```typescript
import { googleCloudAssetOrganizationFeed } from '@cdktf/provider-google-beta'

const googleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination: googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination.property.topic">topic</a></code> | <code>string</code> | Destination on Cloud Pubsub topic. |

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

Destination on Cloud Pubsub topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_asset_organization_feed#topic GoogleCloudAssetOrganizationFeed#topic}

---

### GoogleCloudAssetOrganizationFeedTimeouts <a name="GoogleCloudAssetOrganizationFeedTimeouts" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts.Initializer"></a>

```typescript
import { googleCloudAssetOrganizationFeed } from '@cdktf/provider-google-beta'

const googleCloudAssetOrganizationFeedTimeouts: googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_asset_organization_feed#create GoogleCloudAssetOrganizationFeed#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_asset_organization_feed#delete GoogleCloudAssetOrganizationFeed#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_asset_organization_feed#update GoogleCloudAssetOrganizationFeed#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_asset_organization_feed#create GoogleCloudAssetOrganizationFeed#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_asset_organization_feed#delete GoogleCloudAssetOrganizationFeed#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloud_asset_organization_feed#update GoogleCloudAssetOrganizationFeed#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudAssetOrganizationFeedConditionOutputReference <a name="GoogleCloudAssetOrganizationFeedConditionOutputReference" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.Initializer"></a>

```typescript
import { googleCloudAssetOrganizationFeed } from '@cdktf/provider-google-beta'

new googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition">GoogleCloudAssetOrganizationFeedCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudAssetOrganizationFeedCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedCondition">GoogleCloudAssetOrganizationFeedCondition</a>

---


### GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference <a name="GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.Initializer"></a>

```typescript
import { googleCloudAssetOrganizationFeed } from '@cdktf/provider-google-beta'

new googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.putPubsubDestination">putPubsubDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPubsubDestination` <a name="putPubsubDestination" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.putPubsubDestination"></a>

```typescript
public putPubsubDestination(value: GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.putPubsubDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.pubsubDestination">pubsubDestination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference">GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.pubsubDestinationInput">pubsubDestinationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig">GoogleCloudAssetOrganizationFeedFeedOutputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pubsubDestination`<sup>Required</sup> <a name="pubsubDestination" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.pubsubDestination"></a>

```typescript
public readonly pubsubDestination: GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference">GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference</a>

---

##### `pubsubDestinationInput`<sup>Optional</sup> <a name="pubsubDestinationInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.pubsubDestinationInput"></a>

```typescript
public readonly pubsubDestinationInput: GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudAssetOrganizationFeedFeedOutputConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfig">GoogleCloudAssetOrganizationFeedFeedOutputConfig</a>

---


### GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference <a name="GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer"></a>

```typescript
import { googleCloudAssetOrganizationFeed } from '@cdktf/provider-google-beta'

new googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.topicInput">topicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.topic">topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.topicInput"></a>

```typescript
public readonly topicInput: string;
```

- *Type:* string

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a>

---


### GoogleCloudAssetOrganizationFeedTimeoutsOutputReference <a name="GoogleCloudAssetOrganizationFeedTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleCloudAssetOrganizationFeed } from '@cdktf/provider-google-beta'

new googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts">GoogleCloudAssetOrganizationFeedTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudAssetOrganizationFeedTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudAssetOrganizationFeed.GoogleCloudAssetOrganizationFeedTimeouts">GoogleCloudAssetOrganizationFeedTimeouts</a>

---



