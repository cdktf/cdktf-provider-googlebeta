# `googleStorageControlOrganizationIntelligenceConfig` Submodule <a name="`googleStorageControlOrganizationIntelligenceConfig` Submodule" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageControlOrganizationIntelligenceConfig <a name="GoogleStorageControlOrganizationIntelligenceConfig" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_organization_intelligence_config google_storage_control_organization_intelligence_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer"></a>

```typescript
import { googleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

new googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig(scope: Construct, id: string, config: GoogleStorageControlOrganizationIntelligenceConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig">GoogleStorageControlOrganizationIntelligenceConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig">GoogleStorageControlOrganizationIntelligenceConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.resetEditionConfig">resetEditionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.putFilter"></a>

```typescript
public putFilter(value: GoogleStorageControlOrganizationIntelligenceConfigFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter">GoogleStorageControlOrganizationIntelligenceConfigFilter</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleStorageControlOrganizationIntelligenceConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts">GoogleStorageControlOrganizationIntelligenceConfigTimeouts</a>

---

##### `resetEditionConfig` <a name="resetEditionConfig" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.resetEditionConfig"></a>

```typescript
public resetEditionConfig(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleStorageControlOrganizationIntelligenceConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.isConstruct"></a>

```typescript
import { googleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.isTerraformElement"></a>

```typescript
import { googleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.isTerraformResource"></a>

```typescript
import { googleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport"></a>

```typescript
import { googleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleStorageControlOrganizationIntelligenceConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleStorageControlOrganizationIntelligenceConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleStorageControlOrganizationIntelligenceConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_organization_intelligence_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleStorageControlOrganizationIntelligenceConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.effectiveIntelligenceConfig">effectiveIntelligenceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList">GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference">GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference">GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.trialConfig">trialConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList">GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.editionConfigInput">editionConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.filterInput">filterInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter">GoogleStorageControlOrganizationIntelligenceConfigFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts">GoogleStorageControlOrganizationIntelligenceConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.editionConfig">editionConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `effectiveIntelligenceConfig`<sup>Required</sup> <a name="effectiveIntelligenceConfig" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.effectiveIntelligenceConfig"></a>

```typescript
public readonly effectiveIntelligenceConfig: GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList">GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.filter"></a>

```typescript
public readonly filter: GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference">GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference">GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference</a>

---

##### `trialConfig`<sup>Required</sup> <a name="trialConfig" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.trialConfig"></a>

```typescript
public readonly trialConfig: GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList">GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `editionConfigInput`<sup>Optional</sup> <a name="editionConfigInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.editionConfigInput"></a>

```typescript
public readonly editionConfigInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.filterInput"></a>

```typescript
public readonly filterInput: GoogleStorageControlOrganizationIntelligenceConfigFilter;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter">GoogleStorageControlOrganizationIntelligenceConfigFilter</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleStorageControlOrganizationIntelligenceConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts">GoogleStorageControlOrganizationIntelligenceConfigTimeouts</a>

---

##### `editionConfig`<sup>Required</sup> <a name="editionConfig" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.editionConfig"></a>

```typescript
public readonly editionConfig: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageControlOrganizationIntelligenceConfigConfig <a name="GoogleStorageControlOrganizationIntelligenceConfigConfig" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.Initializer"></a>

```typescript
import { googleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

const googleStorageControlOrganizationIntelligenceConfigConfig: googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.name">name</a></code> | <code>string</code> | Identifier of the GCP Organization. For GCP org, this field should be organization number. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.editionConfig">editionConfig</a></code> | <code>string</code> | Edition configuration of the Storage Intelligence resource. Valid values are INHERIT, DISABLED, TRIAL and STANDARD. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter">GoogleStorageControlOrganizationIntelligenceConfigFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_organization_intelligence_config#id GoogleStorageControlOrganizationIntelligenceConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts">GoogleStorageControlOrganizationIntelligenceConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Identifier of the GCP Organization. For GCP org, this field should be organization number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_organization_intelligence_config#name GoogleStorageControlOrganizationIntelligenceConfig#name}

---

##### `editionConfig`<sup>Optional</sup> <a name="editionConfig" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.editionConfig"></a>

```typescript
public readonly editionConfig: string;
```

- *Type:* string

Edition configuration of the Storage Intelligence resource. Valid values are INHERIT, DISABLED, TRIAL and STANDARD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_organization_intelligence_config#edition_config GoogleStorageControlOrganizationIntelligenceConfig#edition_config}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.filter"></a>

```typescript
public readonly filter: GoogleStorageControlOrganizationIntelligenceConfigFilter;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter">GoogleStorageControlOrganizationIntelligenceConfigFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_organization_intelligence_config#filter GoogleStorageControlOrganizationIntelligenceConfig#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_organization_intelligence_config#id GoogleStorageControlOrganizationIntelligenceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleStorageControlOrganizationIntelligenceConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts">GoogleStorageControlOrganizationIntelligenceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_organization_intelligence_config#timeouts GoogleStorageControlOrganizationIntelligenceConfig#timeouts}

---

### GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig <a name="GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig.Initializer"></a>

```typescript
import { googleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

const googleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig: googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig = { ... }
```


### GoogleStorageControlOrganizationIntelligenceConfigFilter <a name="GoogleStorageControlOrganizationIntelligenceConfigFilter" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter.Initializer"></a>

```typescript
import { googleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

const googleStorageControlOrganizationIntelligenceConfigFilter: googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter.property.excludedCloudStorageBuckets">excludedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | excluded_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter.property.excludedCloudStorageLocations">excludedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | excluded_cloud_storage_locations block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter.property.includedCloudStorageBuckets">includedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | included_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter.property.includedCloudStorageLocations">includedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | included_cloud_storage_locations block. |

---

##### `excludedCloudStorageBuckets`<sup>Optional</sup> <a name="excludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter.property.excludedCloudStorageBuckets"></a>

```typescript
public readonly excludedCloudStorageBuckets: GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

excluded_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_organization_intelligence_config#excluded_cloud_storage_buckets GoogleStorageControlOrganizationIntelligenceConfig#excluded_cloud_storage_buckets}

---

##### `excludedCloudStorageLocations`<sup>Optional</sup> <a name="excludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter.property.excludedCloudStorageLocations"></a>

```typescript
public readonly excludedCloudStorageLocations: GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a>

excluded_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_organization_intelligence_config#excluded_cloud_storage_locations GoogleStorageControlOrganizationIntelligenceConfig#excluded_cloud_storage_locations}

---

##### `includedCloudStorageBuckets`<sup>Optional</sup> <a name="includedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter.property.includedCloudStorageBuckets"></a>

```typescript
public readonly includedCloudStorageBuckets: GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

included_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_organization_intelligence_config#included_cloud_storage_buckets GoogleStorageControlOrganizationIntelligenceConfig#included_cloud_storage_buckets}

---

##### `includedCloudStorageLocations`<sup>Optional</sup> <a name="includedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter.property.includedCloudStorageLocations"></a>

```typescript
public readonly includedCloudStorageLocations: GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a>

included_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_organization_intelligence_config#included_cloud_storage_locations GoogleStorageControlOrganizationIntelligenceConfig#included_cloud_storage_locations}

---

### GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets <a name="GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets.Initializer"></a>

```typescript
import { googleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

const googleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets: googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets.property.bucketIdRegexes">bucketIdRegexes</a></code> | <code>string[]</code> | List of bucket id regexes to exclude in the storage intelligence plan. |

---

##### `bucketIdRegexes`<sup>Required</sup> <a name="bucketIdRegexes" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets.property.bucketIdRegexes"></a>

```typescript
public readonly bucketIdRegexes: string[];
```

- *Type:* string[]

List of bucket id regexes to exclude in the storage intelligence plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_organization_intelligence_config#bucket_id_regexes GoogleStorageControlOrganizationIntelligenceConfig#bucket_id_regexes}

---

### GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations <a name="GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations.Initializer"></a>

```typescript
import { googleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

const googleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations: googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations.property.locations">locations</a></code> | <code>string[]</code> | List of locations. |

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* string[]

List of locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_organization_intelligence_config#locations GoogleStorageControlOrganizationIntelligenceConfig#locations}

---

### GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets <a name="GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets.Initializer"></a>

```typescript
import { googleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

const googleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets: googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets.property.bucketIdRegexes">bucketIdRegexes</a></code> | <code>string[]</code> | List of bucket id regexes to exclude in the storage intelligence plan. |

---

##### `bucketIdRegexes`<sup>Required</sup> <a name="bucketIdRegexes" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets.property.bucketIdRegexes"></a>

```typescript
public readonly bucketIdRegexes: string[];
```

- *Type:* string[]

List of bucket id regexes to exclude in the storage intelligence plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_organization_intelligence_config#bucket_id_regexes GoogleStorageControlOrganizationIntelligenceConfig#bucket_id_regexes}

---

### GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations <a name="GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations.Initializer"></a>

```typescript
import { googleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

const googleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations: googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations.property.locations">locations</a></code> | <code>string[]</code> | List of locations. |

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* string[]

List of locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_organization_intelligence_config#locations GoogleStorageControlOrganizationIntelligenceConfig#locations}

---

### GoogleStorageControlOrganizationIntelligenceConfigTimeouts <a name="GoogleStorageControlOrganizationIntelligenceConfigTimeouts" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts.Initializer"></a>

```typescript
import { googleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

const googleStorageControlOrganizationIntelligenceConfigTimeouts: googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_organization_intelligence_config#create GoogleStorageControlOrganizationIntelligenceConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_organization_intelligence_config#delete GoogleStorageControlOrganizationIntelligenceConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_organization_intelligence_config#update GoogleStorageControlOrganizationIntelligenceConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_organization_intelligence_config#create GoogleStorageControlOrganizationIntelligenceConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_organization_intelligence_config#delete GoogleStorageControlOrganizationIntelligenceConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_organization_intelligence_config#update GoogleStorageControlOrganizationIntelligenceConfig#update}.

---

### GoogleStorageControlOrganizationIntelligenceConfigTrialConfig <a name="GoogleStorageControlOrganizationIntelligenceConfigTrialConfig" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfig.Initializer"></a>

```typescript
import { googleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

const googleStorageControlOrganizationIntelligenceConfigTrialConfig: googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList <a name="GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer"></a>

```typescript
import { googleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

new googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.get"></a>

```typescript
public get(index: number): GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference <a name="GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer"></a>

```typescript
import { googleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

new googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.effectiveEdition">effectiveEdition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.intelligenceConfig">intelligenceConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig">GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveEdition`<sup>Required</sup> <a name="effectiveEdition" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.effectiveEdition"></a>

```typescript
public readonly effectiveEdition: string;
```

- *Type:* string

---

##### `intelligenceConfig`<sup>Required</sup> <a name="intelligenceConfig" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.intelligenceConfig"></a>

```typescript
public readonly intelligenceConfig: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig">GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig</a>

---


### GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference <a name="GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer"></a>

```typescript
import { googleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

new googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput">bucketIdRegexesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">bucketIdRegexes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketIdRegexesInput`<sup>Optional</sup> <a name="bucketIdRegexesInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput"></a>

```typescript
public readonly bucketIdRegexesInput: string[];
```

- *Type:* string[]

---

##### `bucketIdRegexes`<sup>Required</sup> <a name="bucketIdRegexes" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```typescript
public readonly bucketIdRegexes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---


### GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference <a name="GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer"></a>

```typescript
import { googleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

new googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locationsInput">locationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locations">locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locationsInput`<sup>Optional</sup> <a name="locationsInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locationsInput"></a>

```typescript
public readonly locationsInput: string[];
```

- *Type:* string[]

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---


### GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference <a name="GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer"></a>

```typescript
import { googleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

new googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput">bucketIdRegexesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">bucketIdRegexes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketIdRegexesInput`<sup>Optional</sup> <a name="bucketIdRegexesInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput"></a>

```typescript
public readonly bucketIdRegexesInput: string[];
```

- *Type:* string[]

---

##### `bucketIdRegexes`<sup>Required</sup> <a name="bucketIdRegexes" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```typescript
public readonly bucketIdRegexes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---


### GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference <a name="GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer"></a>

```typescript
import { googleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

new googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locationsInput">locationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locations">locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locationsInput`<sup>Optional</sup> <a name="locationsInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locationsInput"></a>

```typescript
public readonly locationsInput: string[];
```

- *Type:* string[]

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---


### GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference <a name="GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer"></a>

```typescript
import { googleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

new googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.putExcludedCloudStorageBuckets">putExcludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.putExcludedCloudStorageLocations">putExcludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.putIncludedCloudStorageBuckets">putIncludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.putIncludedCloudStorageLocations">putIncludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageBuckets">resetExcludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageLocations">resetExcludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageBuckets">resetIncludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageLocations">resetIncludedCloudStorageLocations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExcludedCloudStorageBuckets` <a name="putExcludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.putExcludedCloudStorageBuckets"></a>

```typescript
public putExcludedCloudStorageBuckets(value: GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.putExcludedCloudStorageBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---

##### `putExcludedCloudStorageLocations` <a name="putExcludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.putExcludedCloudStorageLocations"></a>

```typescript
public putExcludedCloudStorageLocations(value: GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.putExcludedCloudStorageLocations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---

##### `putIncludedCloudStorageBuckets` <a name="putIncludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.putIncludedCloudStorageBuckets"></a>

```typescript
public putIncludedCloudStorageBuckets(value: GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.putIncludedCloudStorageBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---

##### `putIncludedCloudStorageLocations` <a name="putIncludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.putIncludedCloudStorageLocations"></a>

```typescript
public putIncludedCloudStorageLocations(value: GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.putIncludedCloudStorageLocations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---

##### `resetExcludedCloudStorageBuckets` <a name="resetExcludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageBuckets"></a>

```typescript
public resetExcludedCloudStorageBuckets(): void
```

##### `resetExcludedCloudStorageLocations` <a name="resetExcludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageLocations"></a>

```typescript
public resetExcludedCloudStorageLocations(): void
```

##### `resetIncludedCloudStorageBuckets` <a name="resetIncludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageBuckets"></a>

```typescript
public resetIncludedCloudStorageBuckets(): void
```

##### `resetIncludedCloudStorageLocations` <a name="resetIncludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageLocations"></a>

```typescript
public resetIncludedCloudStorageLocations(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBuckets">excludedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocations">excludedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageBuckets">includedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocations">includedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBucketsInput">excludedCloudStorageBucketsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocationsInput">excludedCloudStorageLocationsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageBucketsInput">includedCloudStorageBucketsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocationsInput">includedCloudStorageLocationsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter">GoogleStorageControlOrganizationIntelligenceConfigFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludedCloudStorageBuckets`<sup>Required</sup> <a name="excludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBuckets"></a>

```typescript
public readonly excludedCloudStorageBuckets: GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference</a>

---

##### `excludedCloudStorageLocations`<sup>Required</sup> <a name="excludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocations"></a>

```typescript
public readonly excludedCloudStorageLocations: GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference</a>

---

##### `includedCloudStorageBuckets`<sup>Required</sup> <a name="includedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageBuckets"></a>

```typescript
public readonly includedCloudStorageBuckets: GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference</a>

---

##### `includedCloudStorageLocations`<sup>Required</sup> <a name="includedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocations"></a>

```typescript
public readonly includedCloudStorageLocations: GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference</a>

---

##### `excludedCloudStorageBucketsInput`<sup>Optional</sup> <a name="excludedCloudStorageBucketsInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBucketsInput"></a>

```typescript
public readonly excludedCloudStorageBucketsInput: GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---

##### `excludedCloudStorageLocationsInput`<sup>Optional</sup> <a name="excludedCloudStorageLocationsInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocationsInput"></a>

```typescript
public readonly excludedCloudStorageLocationsInput: GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---

##### `includedCloudStorageBucketsInput`<sup>Optional</sup> <a name="includedCloudStorageBucketsInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageBucketsInput"></a>

```typescript
public readonly includedCloudStorageBucketsInput: GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---

##### `includedCloudStorageLocationsInput`<sup>Optional</sup> <a name="includedCloudStorageLocationsInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocationsInput"></a>

```typescript
public readonly includedCloudStorageLocationsInput: GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleStorageControlOrganizationIntelligenceConfigFilter;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter">GoogleStorageControlOrganizationIntelligenceConfigFilter</a>

---


### GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference <a name="GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

new googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts">GoogleStorageControlOrganizationIntelligenceConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleStorageControlOrganizationIntelligenceConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts">GoogleStorageControlOrganizationIntelligenceConfigTimeouts</a>

---


### GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList <a name="GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer"></a>

```typescript
import { googleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

new googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.get"></a>

```typescript
public get(index: number): GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference <a name="GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer"></a>

```typescript
import { googleStorageControlOrganizationIntelligenceConfig } from '@cdktf/provider-google-beta'

new googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfig">GoogleStorageControlOrganizationIntelligenceConfigTrialConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleStorageControlOrganizationIntelligenceConfigTrialConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTrialConfig">GoogleStorageControlOrganizationIntelligenceConfigTrialConfig</a>

---



