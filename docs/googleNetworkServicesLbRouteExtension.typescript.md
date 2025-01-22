# `googleNetworkServicesLbRouteExtension` Submodule <a name="`googleNetworkServicesLbRouteExtension` Submodule" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesLbRouteExtension <a name="GoogleNetworkServicesLbRouteExtension" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_lb_route_extension google_network_services_lb_route_extension}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.Initializer"></a>

```typescript
import { googleNetworkServicesLbRouteExtension } from '@cdktf/provider-google-beta'

new googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension(scope: Construct, id: string, config: GoogleNetworkServicesLbRouteExtensionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig">GoogleNetworkServicesLbRouteExtensionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig">GoogleNetworkServicesLbRouteExtensionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.putExtensionChains">putExtensionChains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExtensionChains` <a name="putExtensionChains" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.putExtensionChains"></a>

```typescript
public putExtensionChains(value: IResolvable | GoogleNetworkServicesLbRouteExtensionExtensionChains[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.putExtensionChains.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains">GoogleNetworkServicesLbRouteExtensionExtensionChains</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetworkServicesLbRouteExtensionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts">GoogleNetworkServicesLbRouteExtensionTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkServicesLbRouteExtension resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isConstruct"></a>

```typescript
import { googleNetworkServicesLbRouteExtension } from '@cdktf/provider-google-beta'

googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isTerraformElement"></a>

```typescript
import { googleNetworkServicesLbRouteExtension } from '@cdktf/provider-google-beta'

googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isTerraformResource"></a>

```typescript
import { googleNetworkServicesLbRouteExtension } from '@cdktf/provider-google-beta'

googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.generateConfigForImport"></a>

```typescript
import { googleNetworkServicesLbRouteExtension } from '@cdktf/provider-google-beta'

googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleNetworkServicesLbRouteExtension resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkServicesLbRouteExtension to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkServicesLbRouteExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_lb_route_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesLbRouteExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.extensionChains">extensionChains</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList">GoogleNetworkServicesLbRouteExtensionExtensionChainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference">GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.extensionChainsInput">extensionChainsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains">GoogleNetworkServicesLbRouteExtensionExtensionChains</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.forwardingRulesInput">forwardingRulesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.loadBalancingSchemeInput">loadBalancingSchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts">GoogleNetworkServicesLbRouteExtensionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.forwardingRules">forwardingRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `extensionChains`<sup>Required</sup> <a name="extensionChains" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.extensionChains"></a>

```typescript
public readonly extensionChains: GoogleNetworkServicesLbRouteExtensionExtensionChainsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList">GoogleNetworkServicesLbRouteExtensionExtensionChainsList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference">GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `extensionChainsInput`<sup>Optional</sup> <a name="extensionChainsInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.extensionChainsInput"></a>

```typescript
public readonly extensionChainsInput: IResolvable | GoogleNetworkServicesLbRouteExtensionExtensionChains[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains">GoogleNetworkServicesLbRouteExtensionExtensionChains</a>[]

---

##### `forwardingRulesInput`<sup>Optional</sup> <a name="forwardingRulesInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.forwardingRulesInput"></a>

```typescript
public readonly forwardingRulesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `loadBalancingSchemeInput`<sup>Optional</sup> <a name="loadBalancingSchemeInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.loadBalancingSchemeInput"></a>

```typescript
public readonly loadBalancingSchemeInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetworkServicesLbRouteExtensionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts">GoogleNetworkServicesLbRouteExtensionTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `forwardingRules`<sup>Required</sup> <a name="forwardingRules" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.forwardingRules"></a>

```typescript
public readonly forwardingRules: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `loadBalancingScheme`<sup>Required</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.loadBalancingScheme"></a>

```typescript
public readonly loadBalancingScheme: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesLbRouteExtensionConfig <a name="GoogleNetworkServicesLbRouteExtensionConfig" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.Initializer"></a>

```typescript
import { googleNetworkServicesLbRouteExtension } from '@cdktf/provider-google-beta'

const googleNetworkServicesLbRouteExtensionConfig: googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.extensionChains">extensionChains</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains">GoogleNetworkServicesLbRouteExtensionExtensionChains</a>[]</code> | extension_chains block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.forwardingRules">forwardingRules</a></code> | <code>string[]</code> | A list of references to the forwarding rules to which this service extension is attached to. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>string</code> | All backend services and forwarding rules referenced by this extension must share the same load balancing scheme. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.location">location</a></code> | <code>string</code> | The location of the route extension. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.name">name</a></code> | <code>string</code> | Name of the LbRouteExtension resource in the following format: projects/{project}/locations/{location}/lbRouteExtensions/{lbRouteExtension}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.description">description</a></code> | <code>string</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_lb_route_extension#id GoogleNetworkServicesLbRouteExtension#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Set of labels associated with the LbRouteExtension resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_lb_route_extension#project GoogleNetworkServicesLbRouteExtension#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts">GoogleNetworkServicesLbRouteExtensionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `extensionChains`<sup>Required</sup> <a name="extensionChains" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.extensionChains"></a>

```typescript
public readonly extensionChains: IResolvable | GoogleNetworkServicesLbRouteExtensionExtensionChains[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains">GoogleNetworkServicesLbRouteExtensionExtensionChains</a>[]

extension_chains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_lb_route_extension#extension_chains GoogleNetworkServicesLbRouteExtension#extension_chains}

---

##### `forwardingRules`<sup>Required</sup> <a name="forwardingRules" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.forwardingRules"></a>

```typescript
public readonly forwardingRules: string[];
```

- *Type:* string[]

A list of references to the forwarding rules to which this service extension is attached to.

At least one forwarding rule is required. There can be only one LbRouteExtension resource per forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_lb_route_extension#forwarding_rules GoogleNetworkServicesLbRouteExtension#forwarding_rules}

---

##### `loadBalancingScheme`<sup>Required</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.loadBalancingScheme"></a>

```typescript
public readonly loadBalancingScheme: string;
```

- *Type:* string

All backend services and forwarding rules referenced by this extension must share the same load balancing scheme.

For more information, refer to [Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service) and
[Supported application load balancers](https://cloud.google.com/service-extensions/docs/callouts-overview#supported-lbs). Possible values: ["INTERNAL_MANAGED", "EXTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_lb_route_extension#load_balancing_scheme GoogleNetworkServicesLbRouteExtension#load_balancing_scheme}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the route extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_lb_route_extension#location GoogleNetworkServicesLbRouteExtension#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the LbRouteExtension resource in the following format: projects/{project}/locations/{location}/lbRouteExtensions/{lbRouteExtension}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_lb_route_extension#name GoogleNetworkServicesLbRouteExtension#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_lb_route_extension#description GoogleNetworkServicesLbRouteExtension#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_lb_route_extension#id GoogleNetworkServicesLbRouteExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Set of labels associated with the LbRouteExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_lb_route_extension#labels GoogleNetworkServicesLbRouteExtension#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_lb_route_extension#project GoogleNetworkServicesLbRouteExtension#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkServicesLbRouteExtensionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts">GoogleNetworkServicesLbRouteExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_lb_route_extension#timeouts GoogleNetworkServicesLbRouteExtension#timeouts}

---

### GoogleNetworkServicesLbRouteExtensionExtensionChains <a name="GoogleNetworkServicesLbRouteExtensionExtensionChains" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains.Initializer"></a>

```typescript
import { googleNetworkServicesLbRouteExtension } from '@cdktf/provider-google-beta'

const googleNetworkServicesLbRouteExtensionExtensionChains: googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains.property.extensions">extensions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions">GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions</a>[]</code> | extensions block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains.property.matchCondition">matchCondition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a></code> | match_condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains.property.name">name</a></code> | <code>string</code> | The name for this extension chain. |

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains.property.extensions"></a>

```typescript
public readonly extensions: IResolvable | GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions">GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions</a>[]

extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_lb_route_extension#extensions GoogleNetworkServicesLbRouteExtension#extensions}

---

##### `matchCondition`<sup>Required</sup> <a name="matchCondition" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains.property.matchCondition"></a>

```typescript
public readonly matchCondition: GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a>

match_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_lb_route_extension#match_condition GoogleNetworkServicesLbRouteExtension#match_condition}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name for this extension chain.

The name is logged as part of the HTTP request logs.
The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
and can have a maximum length of 63 characters. Additionally, the first character must be a letter
and the last character must be a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_lb_route_extension#name GoogleNetworkServicesLbRouteExtension#name}

---

### GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions <a name="GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.Initializer"></a>

```typescript
import { googleNetworkServicesLbRouteExtension } from '@cdktf/provider-google-beta'

const googleNetworkServicesLbRouteExtensionExtensionChainsExtensions: googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.name">name</a></code> | <code>string</code> | The name for this extension. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.service">service</a></code> | <code>string</code> | The reference to the service that runs the extension. Must be a reference to a backend service. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.authority">authority</a></code> | <code>string</code> | The :authority header in the gRPC request sent from Envoy to the extension service. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.failOpen">failOpen</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines how the proxy behaves if the call to the extension fails or times out. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.forwardHeaders">forwardHeaders</a></code> | <code>string[]</code> | List of the HTTP headers to forward to the extension (from the client or backend). |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.timeout">timeout</a></code> | <code>string</code> | Specifies the timeout for each individual message on the stream. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name for this extension.

The name is logged as part of the HTTP request logs.
The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
and can have a maximum length of 63 characters. Additionally, the first character must be a letter
and the last a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_lb_route_extension#name GoogleNetworkServicesLbRouteExtension#name}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The reference to the service that runs the extension. Must be a reference to a backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_lb_route_extension#service GoogleNetworkServicesLbRouteExtension#service}

---

##### `authority`<sup>Optional</sup> <a name="authority" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.authority"></a>

```typescript
public readonly authority: string;
```

- *Type:* string

The :authority header in the gRPC request sent from Envoy to the extension service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_lb_route_extension#authority GoogleNetworkServicesLbRouteExtension#authority}

---

##### `failOpen`<sup>Optional</sup> <a name="failOpen" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.failOpen"></a>

```typescript
public readonly failOpen: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines how the proxy behaves if the call to the extension fails or times out.

When set to TRUE, request or response processing continues without error.
Any subsequent extensions in the extension chain are also executed.
When set to FALSE: * If response headers have not been delivered to the downstream client,
a generic 500 error is returned to the client. The error response can be tailored by
configuring a custom error response in the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_lb_route_extension#fail_open GoogleNetworkServicesLbRouteExtension#fail_open}

---

##### `forwardHeaders`<sup>Optional</sup> <a name="forwardHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.forwardHeaders"></a>

```typescript
public readonly forwardHeaders: string[];
```

- *Type:* string[]

List of the HTTP headers to forward to the extension (from the client or backend).

If omitted, all headers are sent. Each element is a string indicating the header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_lb_route_extension#forward_headers GoogleNetworkServicesLbRouteExtension#forward_headers}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

Specifies the timeout for each individual message on the stream.

The timeout must be between 10-1000 milliseconds.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_lb_route_extension#timeout GoogleNetworkServicesLbRouteExtension#timeout}

---

### GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition <a name="GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition.Initializer"></a>

```typescript
import { googleNetworkServicesLbRouteExtension } from '@cdktf/provider-google-beta'

const googleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition: googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition.property.celExpression">celExpression</a></code> | <code>string</code> | A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed. |

---

##### `celExpression`<sup>Required</sup> <a name="celExpression" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition.property.celExpression"></a>

```typescript
public readonly celExpression: string;
```

- *Type:* string

A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_lb_route_extension#cel_expression GoogleNetworkServicesLbRouteExtension#cel_expression}

---

### GoogleNetworkServicesLbRouteExtensionTimeouts <a name="GoogleNetworkServicesLbRouteExtensionTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts.Initializer"></a>

```typescript
import { googleNetworkServicesLbRouteExtension } from '@cdktf/provider-google-beta'

const googleNetworkServicesLbRouteExtensionTimeouts: googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_lb_route_extension#create GoogleNetworkServicesLbRouteExtension#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_lb_route_extension#delete GoogleNetworkServicesLbRouteExtension#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_lb_route_extension#update GoogleNetworkServicesLbRouteExtension#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_lb_route_extension#create GoogleNetworkServicesLbRouteExtension#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_lb_route_extension#delete GoogleNetworkServicesLbRouteExtension#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_lb_route_extension#update GoogleNetworkServicesLbRouteExtension#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList <a name="GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer"></a>

```typescript
import { googleNetworkServicesLbRouteExtension } from '@cdktf/provider-google-beta'

new googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.get"></a>

```typescript
public get(index: number): GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions">GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions">GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions</a>[]

---


### GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference <a name="GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesLbRouteExtension } from '@cdktf/provider-google-beta'

new googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetAuthority">resetAuthority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetFailOpen">resetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetForwardHeaders">resetForwardHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthority` <a name="resetAuthority" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetAuthority"></a>

```typescript
public resetAuthority(): void
```

##### `resetFailOpen` <a name="resetFailOpen" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetFailOpen"></a>

```typescript
public resetFailOpen(): void
```

##### `resetForwardHeaders` <a name="resetForwardHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetForwardHeaders"></a>

```typescript
public resetForwardHeaders(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.authorityInput">authorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.failOpenInput">failOpenInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.forwardHeadersInput">forwardHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.authority">authority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.failOpen">failOpen</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.forwardHeaders">forwardHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.timeout">timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions">GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorityInput`<sup>Optional</sup> <a name="authorityInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.authorityInput"></a>

```typescript
public readonly authorityInput: string;
```

- *Type:* string

---

##### `failOpenInput`<sup>Optional</sup> <a name="failOpenInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.failOpenInput"></a>

```typescript
public readonly failOpenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forwardHeadersInput`<sup>Optional</sup> <a name="forwardHeadersInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.forwardHeadersInput"></a>

```typescript
public readonly forwardHeadersInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: string;
```

- *Type:* string

---

##### `authority`<sup>Required</sup> <a name="authority" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.authority"></a>

```typescript
public readonly authority: string;
```

- *Type:* string

---

##### `failOpen`<sup>Required</sup> <a name="failOpen" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.failOpen"></a>

```typescript
public readonly failOpen: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forwardHeaders`<sup>Required</sup> <a name="forwardHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.forwardHeaders"></a>

```typescript
public readonly forwardHeaders: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions">GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions</a>

---


### GoogleNetworkServicesLbRouteExtensionExtensionChainsList <a name="GoogleNetworkServicesLbRouteExtensionExtensionChainsList" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.Initializer"></a>

```typescript
import { googleNetworkServicesLbRouteExtension } from '@cdktf/provider-google-beta'

new googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.get"></a>

```typescript
public get(index: number): GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains">GoogleNetworkServicesLbRouteExtensionExtensionChains</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesLbRouteExtensionExtensionChains[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains">GoogleNetworkServicesLbRouteExtensionExtensionChains</a>[]

---


### GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference <a name="GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesLbRouteExtension } from '@cdktf/provider-google-beta'

new googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.celExpressionInput">celExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.celExpression">celExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `celExpressionInput`<sup>Optional</sup> <a name="celExpressionInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.celExpressionInput"></a>

```typescript
public readonly celExpressionInput: string;
```

- *Type:* string

---

##### `celExpression`<sup>Required</sup> <a name="celExpression" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.celExpression"></a>

```typescript
public readonly celExpression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a>

---


### GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference <a name="GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesLbRouteExtension } from '@cdktf/provider-google-beta'

new googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.putExtensions">putExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.putMatchCondition">putMatchCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExtensions` <a name="putExtensions" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.putExtensions"></a>

```typescript
public putExtensions(value: IResolvable | GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.putExtensions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions">GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions</a>[]

---

##### `putMatchCondition` <a name="putMatchCondition" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.putMatchCondition"></a>

```typescript
public putMatchCondition(value: GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.putMatchCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.extensions">extensions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList">GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.matchCondition">matchCondition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference">GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.extensionsInput">extensionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions">GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.matchConditionInput">matchConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains">GoogleNetworkServicesLbRouteExtensionExtensionChains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.extensions"></a>

```typescript
public readonly extensions: GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList">GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList</a>

---

##### `matchCondition`<sup>Required</sup> <a name="matchCondition" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.matchCondition"></a>

```typescript
public readonly matchCondition: GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference">GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference</a>

---

##### `extensionsInput`<sup>Optional</sup> <a name="extensionsInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.extensionsInput"></a>

```typescript
public readonly extensionsInput: IResolvable | GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions">GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions</a>[]

---

##### `matchConditionInput`<sup>Optional</sup> <a name="matchConditionInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.matchConditionInput"></a>

```typescript
public readonly matchConditionInput: GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesLbRouteExtensionExtensionChains;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains">GoogleNetworkServicesLbRouteExtensionExtensionChains</a>

---


### GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference <a name="GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesLbRouteExtension } from '@cdktf/provider-google-beta'

new googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts">GoogleNetworkServicesLbRouteExtensionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesLbRouteExtensionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts">GoogleNetworkServicesLbRouteExtensionTimeouts</a>

---



