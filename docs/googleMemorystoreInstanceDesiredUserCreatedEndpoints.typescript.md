# `googleMemorystoreInstanceDesiredUserCreatedEndpoints` Submodule <a name="`googleMemorystoreInstanceDesiredUserCreatedEndpoints` Submodule" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMemorystoreInstanceDesiredUserCreatedEndpoints <a name="GoogleMemorystoreInstanceDesiredUserCreatedEndpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints google_memorystore_instance_desired_user_created_endpoints}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer"></a>

```typescript
import { googleMemorystoreInstanceDesiredUserCreatedEndpoints } from '@cdktf/provider-google-beta'

new googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints(scope: Construct, id: string, config: GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.putDesiredUserCreatedEndpoints">putDesiredUserCreatedEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.resetDesiredUserCreatedEndpoints">resetDesiredUserCreatedEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDesiredUserCreatedEndpoints` <a name="putDesiredUserCreatedEndpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.putDesiredUserCreatedEndpoints"></a>

```typescript
public putDesiredUserCreatedEndpoints(value: IResolvable | GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.putDesiredUserCreatedEndpoints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts</a>

---

##### `resetDesiredUserCreatedEndpoints` <a name="resetDesiredUserCreatedEndpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.resetDesiredUserCreatedEndpoints"></a>

```typescript
public resetDesiredUserCreatedEndpoints(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleMemorystoreInstanceDesiredUserCreatedEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.isConstruct"></a>

```typescript
import { googleMemorystoreInstanceDesiredUserCreatedEndpoints } from '@cdktf/provider-google-beta'

googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.isTerraformElement"></a>

```typescript
import { googleMemorystoreInstanceDesiredUserCreatedEndpoints } from '@cdktf/provider-google-beta'

googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.isTerraformResource"></a>

```typescript
import { googleMemorystoreInstanceDesiredUserCreatedEndpoints } from '@cdktf/provider-google-beta'

googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.generateConfigForImport"></a>

```typescript
import { googleMemorystoreInstanceDesiredUserCreatedEndpoints } from '@cdktf/provider-google-beta'

googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleMemorystoreInstanceDesiredUserCreatedEndpoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleMemorystoreInstanceDesiredUserCreatedEndpoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleMemorystoreInstanceDesiredUserCreatedEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleMemorystoreInstanceDesiredUserCreatedEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.desiredUserCreatedEndpoints">desiredUserCreatedEndpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.desiredUserCreatedEndpointsInput">desiredUserCreatedEndpointsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `desiredUserCreatedEndpoints`<sup>Required</sup> <a name="desiredUserCreatedEndpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.desiredUserCreatedEndpoints"></a>

```typescript
public readonly desiredUserCreatedEndpoints: GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference</a>

---

##### `desiredUserCreatedEndpointsInput`<sup>Optional</sup> <a name="desiredUserCreatedEndpointsInput" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.desiredUserCreatedEndpointsInput"></a>

```typescript
public readonly desiredUserCreatedEndpointsInput: IResolvable | GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig <a name="GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.Initializer"></a>

```typescript
import { googleMemorystoreInstanceDesiredUserCreatedEndpoints } from '@cdktf/provider-google-beta'

const googleMemorystoreInstanceDesiredUserCreatedEndpointsConfig: googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.name">name</a></code> | <code>string</code> | The name of the Memorystore instance these endpoints should be added to. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.region">region</a></code> | <code>string</code> | The name of the region of the Memorystore instance these endpoints should be added to. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.desiredUserCreatedEndpoints">desiredUserCreatedEndpoints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints</a>[]</code> | desired_user_created_endpoints block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#id GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#project GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Memorystore instance these endpoints should be added to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#name GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The name of the region of the Memorystore instance these endpoints should be added to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#region GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#region}

---

##### `desiredUserCreatedEndpoints`<sup>Optional</sup> <a name="desiredUserCreatedEndpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.desiredUserCreatedEndpoints"></a>

```typescript
public readonly desiredUserCreatedEndpoints: IResolvable | GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints</a>[]

desired_user_created_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#desired_user_created_endpoints GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#desired_user_created_endpoints}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#id GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#project GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#timeouts GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#timeouts}

---

### GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints <a name="GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints.Initializer"></a>

```typescript
import { googleMemorystoreInstanceDesiredUserCreatedEndpoints } from '@cdktf/provider-google-beta'

const googleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints: googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints.property.connections">connections</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections</a>[]</code> | connections block. |

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints.property.connections"></a>

```typescript
public readonly connections: IResolvable | GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections</a>[]

connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#connections GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#connections}

---

### GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections <a name="GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections.Initializer"></a>

```typescript
import { googleMemorystoreInstanceDesiredUserCreatedEndpoints } from '@cdktf/provider-google-beta'

const googleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections: googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections.property.pscConnection">pscConnection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection</a></code> | psc_connection block. |

---

##### `pscConnection`<sup>Optional</sup> <a name="pscConnection" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections.property.pscConnection"></a>

```typescript
public readonly pscConnection: GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection</a>

psc_connection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#psc_connection GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#psc_connection}

---

### GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection <a name="GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.Initializer"></a>

```typescript
import { googleMemorystoreInstanceDesiredUserCreatedEndpoints } from '@cdktf/provider-google-beta'

const googleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection: googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.forwardingRule">forwardingRule</a></code> | <code>string</code> | The URI of the consumer side forwarding rule. Format: projects/{project}/regions/{region}/forwardingRules/{forwarding_rule}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.ipAddress">ipAddress</a></code> | <code>string</code> | The IP allocated on the consumer network for the PSC forwarding rule. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.network">network</a></code> | <code>string</code> | The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.pscConnectionId">pscConnectionId</a></code> | <code>string</code> | The PSC connection id of the forwarding rule connected to the service attachment. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.serviceAttachment">serviceAttachment</a></code> | <code>string</code> | The service attachment which is the target of the PSC connection, in the form of projects/{project-id}/regions/{region}/serviceAttachments/{service-attachment-id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.projectId">projectId</a></code> | <code>string</code> | The consumer project_id where the forwarding rule is created from. |

---

##### `forwardingRule`<sup>Required</sup> <a name="forwardingRule" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.forwardingRule"></a>

```typescript
public readonly forwardingRule: string;
```

- *Type:* string

The URI of the consumer side forwarding rule. Format: projects/{project}/regions/{region}/forwardingRules/{forwarding_rule}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#forwarding_rule GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#forwarding_rule}

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

The IP allocated on the consumer network for the PSC forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#ip_address GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#ip_address}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#network GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#network}

---

##### `pscConnectionId`<sup>Required</sup> <a name="pscConnectionId" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.pscConnectionId"></a>

```typescript
public readonly pscConnectionId: string;
```

- *Type:* string

The PSC connection id of the forwarding rule connected to the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#psc_connection_id GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#psc_connection_id}

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.serviceAttachment"></a>

```typescript
public readonly serviceAttachment: string;
```

- *Type:* string

The service attachment which is the target of the PSC connection, in the form of projects/{project-id}/regions/{region}/serviceAttachments/{service-attachment-id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#service_attachment GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#service_attachment}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The consumer project_id where the forwarding rule is created from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#project_id GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#project_id}

---

### GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts <a name="GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts.Initializer"></a>

```typescript
import { googleMemorystoreInstanceDesiredUserCreatedEndpoints } from '@cdktf/provider-google-beta'

const googleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts: googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#create GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#delete GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#update GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#create GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#delete GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance_desired_user_created_endpoints#update GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList <a name="GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.Initializer"></a>

```typescript
import { googleMemorystoreInstanceDesiredUserCreatedEndpoints } from '@cdktf/provider-google-beta'

new googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.get"></a>

```typescript
public get(index: number): GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections</a>[]

---


### GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference <a name="GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreInstanceDesiredUserCreatedEndpoints } from '@cdktf/provider-google-beta'

new googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.putPscConnection">putPscConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.resetPscConnection">resetPscConnection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPscConnection` <a name="putPscConnection" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.putPscConnection"></a>

```typescript
public putPscConnection(value: GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.putPscConnection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection</a>

---

##### `resetPscConnection` <a name="resetPscConnection" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.resetPscConnection"></a>

```typescript
public resetPscConnection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.pscConnection">pscConnection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.pscConnectionInput">pscConnectionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pscConnection`<sup>Required</sup> <a name="pscConnection" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.pscConnection"></a>

```typescript
public readonly pscConnection: GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference</a>

---

##### `pscConnectionInput`<sup>Optional</sup> <a name="pscConnectionInput" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.pscConnectionInput"></a>

```typescript
public readonly pscConnectionInput: GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections</a>

---


### GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference <a name="GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreInstanceDesiredUserCreatedEndpoints } from '@cdktf/provider-google-beta'

new googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.resetProjectId"></a>

```typescript
public resetProjectId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.connectionType">connectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionStatus">pscConnectionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.forwardingRuleInput">forwardingRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionIdInput">pscConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachmentInput">serviceAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.forwardingRule">forwardingRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionId">pscConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachment">serviceAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

---

##### `pscConnectionStatus`<sup>Required</sup> <a name="pscConnectionStatus" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionStatus"></a>

```typescript
public readonly pscConnectionStatus: string;
```

- *Type:* string

---

##### `forwardingRuleInput`<sup>Optional</sup> <a name="forwardingRuleInput" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.forwardingRuleInput"></a>

```typescript
public readonly forwardingRuleInput: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `pscConnectionIdInput`<sup>Optional</sup> <a name="pscConnectionIdInput" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionIdInput"></a>

```typescript
public readonly pscConnectionIdInput: string;
```

- *Type:* string

---

##### `serviceAttachmentInput`<sup>Optional</sup> <a name="serviceAttachmentInput" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachmentInput"></a>

```typescript
public readonly serviceAttachmentInput: string;
```

- *Type:* string

---

##### `forwardingRule`<sup>Required</sup> <a name="forwardingRule" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.forwardingRule"></a>

```typescript
public readonly forwardingRule: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `pscConnectionId`<sup>Required</sup> <a name="pscConnectionId" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionId"></a>

```typescript
public readonly pscConnectionId: string;
```

- *Type:* string

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachment"></a>

```typescript
public readonly serviceAttachment: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection</a>

---


### GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList <a name="GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.Initializer"></a>

```typescript
import { googleMemorystoreInstanceDesiredUserCreatedEndpoints } from '@cdktf/provider-google-beta'

new googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.get"></a>

```typescript
public get(index: number): GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints</a>[]

---


### GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference <a name="GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreInstanceDesiredUserCreatedEndpoints } from '@cdktf/provider-google-beta'

new googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.putConnections">putConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.resetConnections">resetConnections</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConnections` <a name="putConnections" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.putConnections"></a>

```typescript
public putConnections(value: IResolvable | GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.putConnections.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections</a>[]

---

##### `resetConnections` <a name="resetConnections" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.resetConnections"></a>

```typescript
public resetConnections(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.connections">connections</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.connectionsInput">connectionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.connections"></a>

```typescript
public readonly connections: GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList</a>

---

##### `connectionsInput`<sup>Optional</sup> <a name="connectionsInput" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.connectionsInput"></a>

```typescript
public readonly connectionsInput: IResolvable | GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints</a>

---


### GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference <a name="GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleMemorystoreInstanceDesiredUserCreatedEndpoints } from '@cdktf/provider-google-beta'

new googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts</a>

---



